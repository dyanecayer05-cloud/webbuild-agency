import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig(async () => {
  const integrations = [];

  // Enable React renderer for Clerk's React components
  integrations.push(react());

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

  const viteOptions = {
    resolve: { alias: aliases }
  };

  // Only mark Clerk as external/optimized when it's actually enabled.
  if (process.env.CLERK_PUBLISHABLE_KEY) {
    viteOptions.optimizeDeps = { exclude: ['@clerk/astro'] };
    viteOptions.ssr = { external: ['@clerk/astro'] };
    viteOptions.build = { rollupOptions: { external: ['cloudflare:workers', '@clerk/astro'] } };
  } else {
    // When Clerk is disabled, still avoid bundling cloudflare virtual import
    viteOptions.build = { rollupOptions: { external: ['cloudflare:workers'] } };
  }

  return {
    integrations,
    vite: viteOptions
  };
});