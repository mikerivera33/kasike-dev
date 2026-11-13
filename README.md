# kasike.dev

Mike Rivera's personal site. Static files plus one small serverless function, deployed by Vercel on every push to `main`.

- `index.html`, `articles.html`, `articles/*.html`, `ledger.html`: the pages (one app, one file per address so links and previews work without scripts)
- `app.*.css`, `app.*.js`: styles and code (file names carry a content hash)
- `assets/`, `fonts/`, `vendor/`: photo textures, self-hosted fonts, three.js r128
- `api/ledger.js`: live data for `/ledger` (latest commits from GitHub, one timed request per live site). `api/_ledger.json` is its repo list and built-in snapshot
- `vercel.json`: clean URLs, security headers, caching

Optional setting: a read-only `GITHUB_TOKEN` environment variable in Vercel lets private repositories update live on the ledger. Without it the page still works and shows the built-in snapshot for those repositories.

Vercel project settings: Framework Preset "Other", no build command, output directory empty (repository root).
