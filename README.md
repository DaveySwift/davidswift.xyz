# David Swift — davidswift.xyz

Art Deco personal brand site for David Swift (Capability Builder).

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS + pnpm
- Formspree connect form (`NEXT_PUBLIC_FORMSPREE_ID`)

## Develop

```bash
pnpm install
cp .env.example .env.local   # set Formspree ID
pnpm dev
```

## Scripts

- `pnpm dev` — local server
- `pnpm build` — production build
- `pnpm lint` — ESLint (warnings as errors)
- `pnpm test` — Jest + Testing Library

# Production: [https://davidswift.xyz](https://davidswift.xyz)

## Porkbun Static Hosting

This project builds to a static `out/` folder for Porkbun.

1. In Porkbun → Static Hosting → **GitHub Connect**
2. Select repo `DaveySwift/davidswift.xyz`
3. Set branch to **`deploy`** (not `main`)

`main` holds the Next.js source. On every push to `main`, GitHub Actions builds the site and updates the `deploy` branch with flat static files (required by Porkbun).
