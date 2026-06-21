import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import clerk from '@clerk/astro'; // 1. Add this import

export default defineConfig({
  integrations: [
    tailwind(),
    clerk(), // 2. Add clerk() here
  ],
});