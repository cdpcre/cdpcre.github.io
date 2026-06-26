# Crescenzo De Palma — Personal Website

Sito personale di **Crescenzo De Palma** (Algorithm Engineer — Computer Vision, Deep Learning, Data Science).
Sito statico bilingue (IT/EN) con bio, progetti e blog, costruito con **Next.js + TypeScript + Tailwind CSS** ed esportato come HTML statico per **GitHub Pages**.


## Stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4 + componenti ispirati a shadcn/ui
- Contenuti in Markdown (`content/`) con frontmatter, bilingue EN/IT (`content/` e `content/it/`)
- Export statico (`output: "export"`) pubblicato su GitHub Pages

## Sviluppo in locale

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build di produzione (export statico)

```bash
npm run build      # genera la cartella ./out con l'HTML statico
npx serve out      # anteprima locale della build
```

## Deploy su GitHub Pages

Il workflow `.github/workflows/deploy.yml` compila il sito a ogni push su `main` e lo pubblica su GitHub Pages.

Prima del primo deploy, nel repo su GitHub: **Settings → Pages → Build and deployment → Source = "GitHub Actions"**.

L'URL del sito è `https://cdpcre.github.io`.

## Struttura contenuti

```
content/
  bio.md                    # bio (EN)
  projects/*.md             # progetti (EN)
  blog/*.md                 # articoli del blog (EN) — attualmente vuoto
  it/
    bio.md                  # bio (IT)
    projects/*.md           # progetti (IT)
    blog/*.md               # articoli (IT)
```

Per aggiungere un articolo: crea `content/blog/<slug>.md` (e l'equivalente in `content/it/blog/`) con frontmatter `title`, `date`, `excerpt`, `tags`.
