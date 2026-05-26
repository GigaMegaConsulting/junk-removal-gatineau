# junk-removal-gatineau

Local lead generation site for **junk removal** in **Gatineau, QC** — live at **[gatineaudebarras.com](https://gatineaudebarras.com)**.

Bilingual (FR-first / EN secondary) Next.js 16 site targeting search queries like *débarras Gatineau*, *enlèvement encombrants Outaouais*, *comment jeter un matelas à Gatineau*. Includes:

- Service-area pages for every Gatineau neighbourhood (Hull, Aylmer, Buckingham, Masson-Angers, Pointe-Gatineau, Cantley, Chelsea, La Pêche, Templeton, Val-des-Monts, Limbour) — see the live [locations index](https://gatineaudebarras.com/fr/locations)
- 13 long-tail guide pages anchored by [mattress disposal](https://gatineaudebarras.com/fr/comment-jeter-matelas), [fridge disposal](https://gatineaudebarras.com/fr/comment-jeter-frigo), [sofa disposal](https://gatineaudebarras.com/fr/comment-jeter-sofa), [electronics](https://gatineaudebarras.com/fr/comment-jeter-electroniques), [estate cleanouts](https://gatineaudebarras.com/fr/succession-debarras), [garage cleanouts](https://gatineaudebarras.com/fr/vider-garage), [commercial cleanouts](https://gatineaudebarras.com/fr/debarras-commercial), [post-renovation debris](https://gatineaudebarras.com/fr/debarras-renovation), [moving-day cleanup](https://gatineaudebarras.com/fr/debarras-demenagement), and an [eco-centre guide](https://gatineaudebarras.com/fr/ecocentre-gatineau)
- Full LocalBusiness + Article + BreadcrumbList JSON-LD for rich-result eligibility
- Bilingual hreflang, optimized sitemap, IndexNow integration

Generated from a shared lead-landlord template.

## Related GigaMega projects

- **[gatineaucouvreur.com](https://gatineaucouvreur.com)** ([repo](https://github.com/GigaMegaConsulting/roofing-gatineau)) — Roofing services in the same Outaouais region, built from the same template.
- **[snapaireport.com](https://snapaireport.com)** ([repo](https://github.com/GigaMegaConsulting/snapaireport)) — AI-driven business assessment tool for SMBs.

## Stack

- Next.js 16 (App Router) + Turbopack
- React 19
- Tailwind CSS v4
- TypeScript

## Develop

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deploy

Deployed to Vercel — pushes to `main` auto-deploy. Production domain: **[gatineaudebarras.com](https://gatineaudebarras.com)**.

## Per-site config

All site-specific copy lives in [`src/lib/site.config.ts`](src/lib/site.config.ts). UI strings (form labels etc.) by language live in [`src/lib/copy.ts`](src/lib/copy.ts). Long-form guide content is in [`src/lib/long-tail-content.ts`](src/lib/long-tail-content.ts) with one entry per slug.
