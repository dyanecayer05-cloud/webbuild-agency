import { defineConfig } from 'astro/config';
import clerk from '@clerk/astro';

const integrations = [];

if (process.env.CLERK_PUBLISHABLE_KEY) {
  integrations.push(
    clerk({ publishableKey: process.env.CLERK_PUBLISHABLE_KEY })
  );
} else {
  // Clerk will not be enabled unless CLERK_PUBLISHABLE_KEY is provided.
  // This prevents runtime errors during local development when keys are not set.
  // Set CLERK_PUBLISHABLE_KEY in your environment or create a .env.local file.
  console.warn('[Clerk] CLERK_PUBLISHABLE_KEY not set — Clerk integration disabled');
}

export default defineConfig({
  integrations,
});