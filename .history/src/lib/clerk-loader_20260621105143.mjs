// Loader that avoids static analysis of platform-specific Clerk imports.
export async function loadClerkServer() {
  if (process.env.CLERK_PUBLISHABLE_KEY) {
    // Use indirect dynamic import so bundlers don't statically analyze this string.
    const dynamicImport = new Function('s', 'return import(s)');
    return await dynamicImport('@clerk/astro/server');
  }

  // Fallback to local shim when Clerk isn't configured.
  return await import('../shims/clerk/server.mjs');
}
