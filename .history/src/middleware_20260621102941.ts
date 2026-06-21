let onRequest = (context) => {};

if (process.env.CLERK_PUBLISHABLE_KEY) {
  // Dynamically import Clerk's server helpers only when the publishable key is set.
  // This prevents build-time resolution of platform-specific virtual imports.
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
