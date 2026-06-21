// Loader that avoids static analysis of platform-specific Clerk imports.
export async function loadClerkServer() {
  if (process.env.CLERK_PUBLISHABLE_KEY) {
    const dynamicImport = new Function('s', 'return import(s)');
    try {
      return await dynamicImport('@clerk/astro/server');
    } catch (err) {
      // If the package isn't installed or can't be resolved, fall back to shims.
      return await import('../shims/clerk/server.mjs');
    }
  }

  // Fallback to local shim when Clerk isn't configured.
  return await import('../shims/clerk/server.mjs');
}
