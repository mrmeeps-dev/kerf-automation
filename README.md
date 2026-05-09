# Kerf Automation — marketing site

Next.js site for [Kerf Automation](https://kerfautomation.com): landing page, booking embed (`/book`), and static SEO routes.

**Repository:** [github.com/mrmeeps-dev/kerf-automation](https://github.com/mrmeeps-dev/kerf-automation)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

If you see missing webpack chunks (e.g. `Cannot find module './NNN.js'`), stop the dev server, run `npm run clean`, then `npm run dev` or `npm run build` again.

## Environment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_*` values (see comments in `.env.example`). `.env.local` is ignored by git.
