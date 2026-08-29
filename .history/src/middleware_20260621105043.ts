// Restored Clerk-enabled middleware
let onRequest = (context) => {};

if (process.env.CLERK_PUBLISHABLE_KEY) {
  const mod = await import('@clerk/astro/server');
  const { clerkMiddleware, createRouteMatcher } = mod;
  const isProtectedRoute = createRouteMatcher(['/admin(.*)']);

  onRequest = clerkMiddleware((auth, context) => {
    if (!auth().userId && isProtectedRoute(context.request)) {
      return auth().redirectToSignIn();
    }
  });
}

export { onRequest };
