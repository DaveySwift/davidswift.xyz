# davidswift.xyz

Personal site for David Swift. The live site is [davidswift.xyz](https://davidswift.xyz).

The public line is Regenerative, Intelligence, and Enterprise 2.0.

## Stack

- Next.js (App Router), TypeScript, Tailwind CSS, pnpm
- Static export (`output: "export"`)
- The connect form posts to Formspree (`NEXT_PUBLIC_FORMSPREE_ID`)

## Develop

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Scripts

- `pnpm dev` — local server
- `pnpm build` — write the static site to `out/`
- `pnpm lint` — ESLint, warnings treated as errors
- `pnpm test` — Jest and Testing Library

## Hosting

Porkbun Static Hosting is connected to the **`Porkbun`** branch. That branch is the flat export (`index.html` and assets), not this source tree. GitHub’s default branch is `Porkbun`, so the repository home page only shows a README that lives on that branch.

Point GitHub Connect at `Porkbun`. Do not point it at a source branch.

To publish, build with `pnpm build`, replace the files on `Porkbun` with the contents of `out/`, and keep this `README.md` in place.
