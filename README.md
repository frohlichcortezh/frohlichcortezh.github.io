# frohlichcortezh.github.io

Personal CV of Hector Frohlich Cortez in English (`/`), Portuguese (`/pt/`) and French (`/fr/`).
Static Astro site, visual language borrowed from [resolu.dev](https://resolu.dev).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321 — unconfirmed data shows as "TO CONFIRM"
npm run check
npm run build && npm run preview   # production view: drafts and unknown values hidden
```

## Content

Everything lives in `src/data/cv.ts`, with the three languages side by side.
`null` = not confirmed yet (visible only in dev); `draft: true` = entry hidden in production.
Interface strings are in `src/lib/i18n.ts`.

## Deploy

`.github/workflows/deploy.yml` builds and publishes on every push to `master`.
In the repository settings, **Pages → Source** must be set to **GitHub Actions**.
