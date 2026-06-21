// Middleware that only loads Clerk when CLERK_PUBLISHABLE_KEY is present at build/runtime.
// This keeps prerender and static builds safe.
// Default middleware: call the next handler when available (prerender-safe).
let onRequest = async (context) => {
  if (typeof context.next === 'function') {
    return await context.next();
  }
  // If `next` is not available (edge cases), return a minimal 200 response.
  return new Response(null, { status: 200 });
};

if (process.env.CLERK_PUBLISHABLE_KEY) {
  // Dynamically import the server helper to avoid static analysis of virtual imports.
  const loader = await import('./lib/clerk-loader.mjs');
  const serverMod = await loader.loadClerkServer();
  const { clerkMiddleware, createRouteMatcher } = serverMod;
  const isProtectedRoute = createRouteMatcher(['/admin(.*)']);

  onRequest = clerkMiddleware((auth, context) => {
    if (!auth().userId && isProtectedRoute(context.request)) {
      return auth().redirectToSignIn();
    }
  });
}

export { onRequest };
