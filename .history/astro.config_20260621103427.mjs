import { defineConfig } from 'astro/config';

export default defineConfig(async () => {
  const integrations = [];

  if (process.env.pk_test_Z29yZ2VvdXMtZ3JhY2tsZS0xNy5jbGVyay5hY2NvdW50cy5kZXYk) {
    // Dynamically import Clerk only when the publishable key is present.
    // This avoids build-time resolution of platform-specific imports.
    const mod = await import('@clerk/astro');
    const clerk = mod.default ?? mod.clerk;
    integrations.push(clerk({ publishableKey: process.env.pk_test_Z29yZ2VvdXMtZ3JhY2tsZS0xNy5jbGVyay5hY2NvdW50cy5kZXYk}));
  } else {
    console.warn('[Clerk] CLERK_PUBLISHABLE_KEY not set — Clerk integration disabled');
  }

  return {
    integrations,
    vite: {
      build: {
        rollupOptions: {
          external: ['cloudflare:workers', '@clerk/astro']
        }
      }
    }
  };
});