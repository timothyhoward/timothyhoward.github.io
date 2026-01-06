# timothyhoward.github.io

Personal site built with Hugo.

## Quickstart

- Install Hugo extended (0.152.2 recommended).
- Run the dev server:

```bash
hugo server
```

- Build the site:

```bash
hugo --minify
```

The output is written to `public/`.

## Content

- Writing index: `content/writing/_index.md`
- Notes: `content/writing/notes/`
- Posts: `content/writing/posts/`
- Resume: `content/resume/index.md`

Shortcodes are documented in `SHORTCODES.md`.

## Feeds

- Site RSS: `/index.xml`
- Writing RSS: `/writing/writing.xml`

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/gh-pages.yml`.

1. In GitHub, go to Settings -> Pages.
2. Set Source to "GitHub Actions".
3. Push to `main` and the workflow will build and deploy.

If you use a custom domain, add a `static/CNAME` file and configure the domain in GitHub Pages.

## Licensing notes

This repo includes third party assets. Please verify and keep the license text for any assets you use:

- ET Book font files live under `themes/timothyhoward/static/css/et-book/` and are copied to `public/css/et-book/` on build. If these were sourced from Tufte CSS, they are typically distributed under the SIL Open Font License 1.1. Confirm the upstream source and include the OFL text if required.
- Tufte CSS base styles are included in `themes/timothyhoward/static/css/post.css`. Tufte CSS is MIT licensed; include the MIT license text if you keep those portions.
- Google Fonts (IBM Plex Sans, IBM Plex Mono, Source Serif 4) are used via the Google Fonts CDN and are licensed under the SIL Open Font License.
- Inline SVG icons are custom; if you sourced them from a library, add the relevant license.
