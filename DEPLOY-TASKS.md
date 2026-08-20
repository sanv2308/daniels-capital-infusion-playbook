# DEPLOY-TASKS

**Status: deployed.** Live at https://daniels-playbook.vercel.app — the
Vercel project `daniels-playbook` builds from
`github.com/sanv2308/daniels-capital-infusion-playbook` (main). The framework
preset was switched from "Other" (old static site) to **Next.js**; every push
to main now auto-deploys production.

Remaining human steps (optional):

1. Custom domain: Vercel project → Settings → Domains, if the team wants one.
2. Access control: the playbook is competitive material on a public URL and a
   PUBLIC GitHub repo. Consider making the repo private and enabling Vercel
   Deployment Protection (password/SSO) — Settings → Deployment Protection.
3. No environment variables are required — the site is fully static content.

Local dev:

```bash
npm run dev   # port 4820
```
