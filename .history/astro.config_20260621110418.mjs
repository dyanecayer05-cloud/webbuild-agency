import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig(async () => {
  const integrations = [];

  // Enable React renderer for Clerk's React components
  integrations.push(react());

  // Do not import @clerk/astro here to avoid build-time resolution of its
  // platform-specific virtual imports. Clerk UI is handled client-side in
  // the application; server middleware is conditionally loaded at runtime.

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
  // Always alias the virtual Clerk config to a local shim to avoid unresolved virtual imports.
  aliases['virtual:@clerk/astro/config'] = new URL('./src/shims/clerk/config.mjs', import.meta.url).pathname;

  const viteOptions = {
    resolve: { alias: aliases }
  };

  // Generally avoid pre-bundling Clerk packages to stop Vite from statically analyzing its virtual imports.
  viteOptions.optimizeDeps = { exclude: ['@clerk/astro', '@clerk/astro/components', '@clerk/astro/server', 'virtual:@clerk/astro/config'] };

  // Provide a lightweight Vite plugin that supplies the virtual Clerk config
  // module to prevent Rollup from attempting to resolve the platform-specific virtual import.
  const clerkConfigVirtualPlugin = {
    name: 'virtual-clerk-config-shim',
    resolveId(id) {
      if (id === 'virtual:@clerk/astro/config') return '\0' + id;
      return null;
    },
    load(id) {
      if (id === '\0virtual:@clerk/astro/config') {
        const cfg = { publishableKey: process.env.CLERK_PUBLISHABLE_KEY ?? '' };
        return `export const clerkConfig = ${JSON.stringify(cfg)}; export default clerkConfig;`;
      }
      return null;
    }
  };
  viteOptions.plugins = [clerkConfigVirtualPlugin];

  // Only mark Clerk as external/optimized when it's actually enabled.
  if (process.env.CLERK_PUBLISHABLE_KEY) {
    viteOptions.ssr = { external: ['@clerk/astro', 'virtual:@clerk/astro/config'] };
    viteOptions.build = { rollupOptions: { external: ['cloudflare:workers', '@clerk/astro', '@clerk/astro/components', 'virtual:@clerk/astro/config'] } };
  } else {
    // When Clerk is disabled, still avoid bundling cloudflare virtual import
    viteOptions.ssr = { external: ['virtual:@clerk/astro/config'] };
    viteOptions.build = { rollupOptions: { external: ['cloudflare:workers', '@clerk/astro/components', 'virtual:@clerk/astro/config'] } };
  }

  return {
    integrations,
    vite: viteOptions
  };
});