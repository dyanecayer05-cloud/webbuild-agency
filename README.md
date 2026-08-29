# WebBuild Astro Site

Marketing site and lightweight admin workspace for WebBuild, built with Astro, React islands, and Tailwind CSS.

## Commands

All commands run from the project root:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Structure

- `src/pages/index.astro` assembles the public landing page.
- `src/pages/login.astro` renders the Clerk-powered admin sign-in island.
- `src/pages/admin.astro` contains the static admin workspace UI.
- `src/components/` contains the site sections and React Clerk mounts.
- `src/styles/global.css` is the shared Tailwind entrypoint imported by `src/components/GlobalStyles.astro`.

## Clerk

The app uses client-side Clerk mounting so static builds do not resolve Clerk's platform-specific virtual imports.

Set either environment variable before building or running the app:

```bash
CLERK_PUBLISHABLE_KEY=pk_...
# or
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
```

Without a key, `/login` shows a clear disabled state and `/admin` still builds as a local static preview.

## Styling

Tailwind is configured through `@tailwindcss/postcss` in `postcss.config.cjs`. Keep global CSS centralized through `src/components/GlobalStyles.astro` rather than importing it directly into pages.
