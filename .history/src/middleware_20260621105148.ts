// Restored Clerk-enabled middleware
let onRequest = (context) => {};

// Use a local loader that avoids static analysis of Clerk's platform-specific imports.
const loader = await import('./lib/clerk-loader.mjs');
const serverMod = await loader.loadClerkServer();
const { clerkMiddleware, createRouteMatcher } = serverMod;
const isProtectedRoute = createRouteMatcher(['/admin(.*)']);

onRequest = clerkMiddleware((auth, context) => {
  if (!auth().userId && isProtectedRoute(context.request)) {
    return auth().redirectToSignIn();
  }
});

export { onRequest };
