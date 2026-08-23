# DEPLOY-TASKS

**Status: deployed.** Live at https://daniels-playbook.vercel.app — Vercel
project `daniels-playbook` builds from
`github.com/sanv2308/daniels-capital-infusion-playbook` (main). Every push to
main auto-deploys production.

## Design note

The site uses the **original carbon-fiber design language** (carbon hatch,
chrome-bevel tiles, Manrope 800, blue-steel accent, champagne figures). The
short-lived "trading-desk" green reskin was reverted; that version is parked
on the `v3-playbook` branch if it's ever wanted for reference.

Remaining human steps (optional):

1. Custom domain: Vercel project → Settings → Domains.
2. Access control: this is competitive material on a public URL and a PUBLIC
   GitHub repo. Consider making the repo private and enabling Vercel
   Deployment Protection (Settings → Deployment Protection).
3. No environment variables required — the site is fully static.

Local dev:

```bash
npm run dev   # port 4820
```
