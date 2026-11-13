# kasike.dev

Mike Rivera's personal site. Static files, deployed by Vercel on every push to `main`.

- `index.html`, `articles.html`, `articles/*.html`: the pages (same app, one file per address so links and previews work without scripts)
- `app.*.css`, `app.*.js`: styles and code (file names carry a content hash)
- `assets/`, `fonts/`, `vendor/`: photo textures, self-hosted fonts, three.js r128
- `vercel.json`: clean URLs, security headers, caching
