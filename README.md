# Halyna Pryn — Portfolio

Personal portfolio built with **React, TypeScript, Vite and Tailwind CSS v4**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Editing content

All text (experience, skills, work, contact) lives in [`src/data.ts`](src/data.ts),
translated into English (`en`), Polish (`pl`) and Ukrainian (`uk`). The site picks the
visitor's browser language and remembers the choice made in the EN / PL / UA switcher.
The downloadable CV is `public/Halyna-Pryn-CV.pdf` — replace the file to update it.

## Structure

```
src/
  data.ts            ← all content
  index.css          ← theme colours, fonts, animations
  components/
    Nav, Hero, About, Experience, Work, Skills, Contact, Footer
    Section.tsx      ← section wrapper, scroll reveal, tag
```

## Deploy (Vercel)

1. Push this folder to a GitHub repository.
2. On https://vercel.com → **Add New → Project** → import the repository.
3. Framework preset: **Vite** (detected automatically) → **Deploy**.

Every `git push` to `main` redeploys the site.
