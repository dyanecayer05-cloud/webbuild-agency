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

  // Base aliases always present
  const aliases = {
    'cloudflare:workers': new URL('./src/stubs/cloudflare-workers.mjs', import.meta.url).pathname
  };

  // If Clerk is NOT configured, alias Clerk imports to local shims so Rollup/Vite won't resolve platform-specific imports.
  if (!process.env.CLERK_PUBLISHABLE_KEY) {
    aliases['@clerk/astro'] = new URL('./src/shims/clerk/index.mjs', import.meta.url).pathname;
    aliases['@clerk/astro/components'] = new URL('./src/shims/clerk/components.mjs', import.meta.url).pathname;
    aliases['@clerk/astro/server'] = new URL('./src/shims/clerk/server.mjs', import.meta.url).pathname;
  }

  return {
    integrations,
    vite: {
      resolve: {
        alias: aliases
      },
      optimizeDeps: {
        exclude: ['@clerk/astro']
      },
      ssr: {
        external: ['@clerk/astro']
      },
      build: {
        rollupOptions: {
          external: ['cloudflare:workers', '@clerk/astro']
        }
      }
    }
  };
});