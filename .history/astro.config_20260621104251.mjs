import { defineConfig } from 'astro/config';

export default defineConfig(async () => {
  const integrations = [];

  if (process.env.CLERK_PUBLISHABLE_KEY) {
    // Dynamically import Clerk only when the publishable key is present.
    // This avoids build-time resolution of platform-specific imports.
    const mod = await import('@clerk/astro');
    const clerk = mod.default ?? mod.clerk;
    integrations.push(clerk({ publishableKey: process.env.CLERK_PUBLISHABLE_KEY }));
  } else {
    console.warn('[Clerk] CLERK_PUBLISHABLE_KEY not set — Clerk integration disabled');
  }

  return {
    integrations,
    vite: {
      resolve: {
        alias: {
          // Map the virtual Cloudflare specifier to a local stub so Rollup doesn't try to resolve it.
          'cloudflare:workers': new URL('./src/stubs/cloudflare-workers.mjs', import.meta.url).pathname
        }
      },
      build: {
        rollupOptions: {
          external: ['cloudflare:workers', '@clerk/astro']
        }
      }
    }
  };
});