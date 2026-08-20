# DEPLOY-TASKS — human steps only

The site builds clean (`npm run build`) and is pushed to
`github.com/sanv2308/daniels-capital-infusion-playbook` (main). Vercel steps:

1. **If the repo is already connected to Vercel** (it had a `vercel.json`
   static deploy): open the Vercel project → Settings → General → Framework
   Preset must now read **Next.js** (auto-detected). If it still says "Other",
   set it to Next.js and redeploy. Build command `next build`, output default.
2. **If not connected**: vercel.com → Add New Project → import
   `daniels-capital-infusion-playbook` → accept the Next.js defaults → Deploy.
3. No environment variables are required — the site is fully static content.
4. After first deploy, check `/call?p=2` and `/industries/trucking` render.

Local dev:

```bash
npm run dev   # port 4820
```
