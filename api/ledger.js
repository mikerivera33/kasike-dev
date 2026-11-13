/* GET /api/ledger : live data for https://kasike.dev/ledger
   For five fixed repositories it reads the latest commits from the GitHub API and times one request to each project's live site.
   It takes no input from the caller: no query, no body, no headers are read. The repository and site lists live in _ledger.json.
   Optional environment variable GITHUB_TOKEN (read-only) raises GitHub's rate limit and lets private repositories update live.
   The token is only ever sent to api.github.com and never appears in a response. */
const SNAP = require('./_ledger.json');
const UA = 'kasike.dev-ledger/1.0 (+https://kasike.dev/ledger)';
const NOTES = {};
SNAP.repos.forEach(r => r.commits.forEach(c => { NOTES[r.id + ':' + c.sha] = c; }));

function timed(url, opt, ms){
  const ac = new AbortController(), t = setTimeout(() => ac.abort(), ms);
  return fetch(url, {...opt, signal: ac.signal}).finally(() => clearTimeout(t));
}
async function gh(path){
  const h = {'User-Agent': UA, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28'};
  if (process.env.GITHUB_TOKEN) h.Authorization = 'Bearer ' + process.env.GITHUB_TOKEN;
  const r = await timed('https://api.github.com' + path, {headers: h, redirect: 'error'}, 3000);
  if (!r.ok) throw new Error('github ' + r.status);
  return r.json();
}
async function probe(url){
  const t0 = Date.now(), r = await timed(url, {method: 'GET', redirect: 'follow', headers: {'User-Agent': UA}}, 4000), ms = Date.now() - t0;
  try { if (r.body && r.body.cancel) await r.body.cancel(); } catch (e) { /* nothing to release */ }
  return {ms, status: r.status};
}

/* commit subject -> short plain sentence + a kind. Anything that reads as security-sensitive is summarized without detail. */
const SENSITIVE = /secret|token|password|passwd|credential|api[-_ ]?key|private key|vulnerab|cve-|exploit|bypass|injection|xss|csrf|ssrf|leak|spoof|rate[- ]?limit|x-forwarded|\bauth(n|z|entication|orization)?\b|permission|sanitiz/i;
const TYPES = {fix: 'fix', bugfix: 'fix', hotfix: 'fix', feat: 'feature', feature: 'feature', docs: 'docs', doc: 'docs', test: 'test', tests: 'test', ci: 'test', perf: 'perf', security: 'security', sec: 'security', chore: 'chore', build: 'chore', refactor: 'chore', style: 'chore', revert: 'fix'};
function plain(subject){
  let t = String(subject || '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s*\(#\d+\)\s*$/, '').replace(/\S+@\S+\.\S+/g, '').replace(/https?:\/\/\S+/g, '').replace(/\s+/g, ' ').trim(), kind = '';
  const m = /^([a-z]+)(\([^)]*\))?!?:\s*(.+)$/i.exec(t);
  if (m && TYPES[m[1].toLowerCase()]){ kind = TYPES[m[1].toLowerCase()]; t = m[3]; }
  if (SENSITIVE.test(t)) return {kind: 'security', text: 'Security hardening. The details stay out of the public ledger.'};
  if (!kind) kind = /\b(fix|fixes|fixed|bug|broken|no longer|defect|repair|correct|regression)\b/i.test(t) ? 'fix' : /\b(tests?|ci|lint|canary|smoke|coverage)\b/i.test(t) ? 'test' : /\b(docs?|readme|changelog|comment)\b|\.md\b/i.test(t) ? 'docs' : /\b(faster|speed|perf|cache|lazy)\b/i.test(t) ? 'perf' : /\b(add|adds|added|new|build|built|introduce|support|create|launch)\b/i.test(t) ? 'feature' : 'update';
  if (!t) t = 'Update';
  t = t.charAt(0).toUpperCase() + t.slice(1);
  if (t.length > 150) t = t.slice(0, 147).replace(/\s+\S*$/, '') + '…';
  return {kind, text: t};
}

async function one(r){
  const out = {...r, src: 'snapshot', latency: null, head: null};
  if (!/^[\w.-]+\/[\w.-]+$/.test(r.repo) || !/^[\w./-]+$/.test(r.branch) || !/^https:\/\/[a-z0-9.-]+\/$/.test(r.demo)) return out;
  const [cm, lat] = await Promise.allSettled([gh('/repos/' + r.repo + '/commits?sha=' + encodeURIComponent(r.branch) + '&per_page=8'), probe(r.demo)]);
  if (lat.status === 'fulfilled') out.latency = lat.value;
  if (cm.status !== 'fulfilled' || !Array.isArray(cm.value)) return out;
  const ok = cm.value.filter(c => c && /^[0-9a-f]{40}$/.test(c.sha) && c.commit && typeof c.commit.message === 'string');
  const list = ok.filter(c => !/^Merge /.test(c.commit.message)).slice(0, 5).map(c => {
    const sha = c.sha.slice(0, 7), note = NOTES[r.id + ':' + sha], when = (c.commit.committer && c.commit.committer.date) || (c.commit.author && c.commit.author.date) || (note && note.date) || null;
    const p = note || plain(c.commit.message.split('\n')[0]);
    return {sha, date: when, kind: p.kind, text: p.text};
  }).filter(c => c.date && !isNaN(Date.parse(c.date)));
  if (!list.length) return out;
  out.commits = list; out.src = 'live';
  try { const st = await gh('/repos/' + r.repo + '/commits/' + ok[0].sha + '/status'); if (st && st.total_count > 0 && /^(success|failure|error|pending)$/.test(st.state)) out.head = st.state; } catch (e) { /* no status published for this commit */ }
  return out;
}

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (req.method !== 'GET' && req.method !== 'HEAD'){ res.setHeader('Allow', 'GET, HEAD'); res.statusCode = 405; return res.end('{"error":"method not allowed"}'); }
  let repos;
  try { repos = await Promise.all(SNAP.repos.map(r => one(r).catch(() => ({...r, src: 'snapshot', latency: null, head: null})))); }
  catch (e) { repos = SNAP.repos.map(r => ({...r, src: 'snapshot', latency: null, head: null})); }
  const live = repos.some(r => r.src === 'live');
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=' + (live ? 900 : 120) + ', stale-while-revalidate=86400');
  res.statusCode = 200;
  res.end(req.method === 'HEAD' ? '' : JSON.stringify({generated: new Date().toISOString(), live, repos}));
};
module.exports.plain = plain;
