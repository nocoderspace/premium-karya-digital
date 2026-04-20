
## Diagnosis

Code itself is healthy — no Next.js leftovers, no broken imports, all assets exist, routes are valid TanStack Router files. The site even runs fine on Lovable's published URL (`premium-karya-digital.lovable.app`).

**Why Vercel returns 404 at `/`:** the project is configured to build for **Cloudflare Workers**, not Vercel.

Evidence:
- `wrangler.jsonc` exists at the root (Cloudflare Workers config)
- `package.json` includes `@cloudflare/vite-plugin` as a dependency
- `@lovable.dev/vite-tanstack-config` (used in `vite.config.ts`) bundles the Cloudflare plugin in build mode

Result of `npm run build` in this state: output is a **Cloudflare Worker bundle** (`.wrangler/` / worker assets), **not** a static `dist/` folder with `index.html` that Vercel's default Vite preset expects. Vercel deploys "successfully" but has nothing to serve at `/`, hence the 404.

## Fix (no architecture rewrite needed)

TanStack Start officially supports a Vercel build target. We switch the SSR target from Cloudflare to Vercel — the rest of the app (routes, components, styles, assets) stays exactly as is.

### Steps

1. **Add Vercel target to `vite.config.ts`**
   Pass `target: "vercel"` into `@lovable.dev/vite-tanstack-config` (or fall back to `@tanstack/react-start` plugin directly with `target: "vercel"`) so the build emits a Vercel-compatible output (`.vercel/output/`) instead of a Cloudflare Worker.

2. **Add `vercel.json`** at the project root to lock the framework preset and output:
   ```json
   { "framework": null, "buildCommand": "npm run build", "outputDirectory": ".vercel/output" }
   ```
   (TanStack Start's Vercel target writes the Build Output API v3 directory directly — Vercel auto-detects it; the file just prevents Vercel from guessing wrong.)

3. **Keep `wrangler.jsonc`** (harmless on Vercel) OR remove it if you only deploy to Vercel from now on. I'd keep it so Lovable Publish keeps working.

4. **Verify on Vercel**:
   - Project Settings → Framework Preset: **Other** (do not pick "Vite", it'll override)
   - Build command: `npm run build`
   - Output: leave empty (Build Output API auto-detected)
   - Install command: `npm install`

### What I will NOT do
- Will not rewrite to plain Vite SPA + React Router (would break SSR, per-route SEO, and `head()` meta you already wrote).
- Will not remove TanStack Start (the entire `src/routes/` tree depends on it).
- Will not touch any UI/content/images — only config files (`vite.config.ts`, add `vercel.json`).

### Files touched
- `vite.config.ts` — add Vercel target
- `vercel.json` — new file
- (optional) keep `wrangler.jsonc` for Lovable hosting

### Alternative if you want zero config
Just click **Publish** on Lovable — your site is already live and healthy at `https://premium-karya-digital.lovable.app`. Then connect a custom domain in Project Settings → Domains. No GitHub/Vercel pipeline needed.
