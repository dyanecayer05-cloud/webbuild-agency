// Loader that conditionally loads Clerk component exports without static analysis
export async function loadClerkComponents() {
  if (process.env.CLERK_PUBLISHABLE_KEY) {
    const dynamicImport = new Function('s', 'return import(s)');
    return await dynamicImport('@clerk/astro/components');
  }

  return await import('../shims/clerk/components.mjs');
}
