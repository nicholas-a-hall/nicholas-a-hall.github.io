# Portfolio

A personal careers portfolio / online résumé, built with **React + Vite**. Fully
data-driven, responsive, dark/light themed, and ready to deploy to GitHub Pages.

## Editing your content

You almost never need to touch the components. Everything the site shows lives in
one file:

```
src/data/content.js
```

Edit your name, tagline, about story, skills, projects, and experience there — the
layout updates itself. The `about` and `project` blurbs ship pre-written (in a voice
you can react to and tweak) precisely because writing about yourself is the hard part.

## Running locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Project structure

```
src/
  data/content.js       ← YOUR CONTENT (edit this)
  App.jsx               ← composes the sections, owns theme state
  index.css             ← design tokens (colors, spacing, type) + base styles
  hooks/useReveal.js    ← scroll-into-view animation
  components/
    Navbar / Hero / About / Skills / Projects (+ ProjectCard) /
    Experience / Contact / Footer / Section / Icon
```

Each component takes its data via **props**, so it's reusable and easy to reorder in
`App.jsx`.

## Theming

All colors, radii, and fonts are CSS variables in `src/index.css` (`:root` for dark,
`:root[data-theme='light']` for light). Change the `--accent` value to recolor the
whole site. The theme toggle in the navbar persists to `localStorage`.

## Deploying to GitHub Pages

`vite.config.js` uses `base: './'`, so the build works on a project site
(`https://USERNAME.github.io/REPO/`) with no extra config.

### Option A — automatic (recommended)

A workflow at `.github/workflows/deploy.yml` builds and deploys on every push to
`main`.

1. Create a GitHub repo and push this project to it.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The Action builds and publishes; your site appears at
   `https://USERNAME.github.io/REPO/`.

### Option B — manual, one command

```bash
npm run deploy   # builds and pushes dist/ to the gh-pages branch
```

Then set **Settings → Pages → Source: Deploy from a branch → `gh-pages` / root**.

## Adding a résumé PDF

Drop the file in `public/` (e.g. `public/resume.pdf`) and set
`profile.resumeUrl: './resume.pdf'` in `content.js`. A Résumé button appears in the hero.
