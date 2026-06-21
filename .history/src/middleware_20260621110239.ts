// Middleware that only loads Clerk when CLERK_PUBLISHABLE_KEY is present at build/runtime.
// This keeps prerender and static builds safe.
let onRequest = (context) => {};

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
