// Middleware that only loads Clerk when CLERK_PUBLISHABLE_KEY is present at build/runtime.
// This keeps prerender and static builds safe.
export async function onRequest(context) {
  // If Clerk isn't configured, let the request proceed (prerender-safe).
  if (!process.env.CLERK_PUBLISHABLE_KEY) {
    if (typeof context.next === 'function') return await context.next();
    // In prerender/static build contexts `context.next` may be absent;
    // returning `undefined` lets Astro continue rendering the route.
    return;
  }

  // When Clerk is configured, dynamically load the server helpers at runtime
  // to avoid static resolution of platform-specific virtual imports.
  const loader = await import('./lib/clerk-loader.mjs');
  const serverMod = await loader.loadClerkServer();
  const { clerkMiddleware, createRouteMatcher } = serverMod;
  const isProtectedRoute = createRouteMatcher(['/admin(.*)']);

  // Build a middleware function and execute it for this request.
  const mw = clerkMiddleware((auth, ctx) => {
    if (!auth().userId && isProtectedRoute(ctx.request)) {
      return auth().redirectToSignIn();
    }
    if (typeof ctx.next === 'function') return ctx.next();
    return new Response(null, { status: 200 });
  });

  // If `context.next` is not present (prerender/static build), skip running
  // the full Clerk middleware and return a safe empty response so the build
  // prerenderer can continue.
  if (typeof context.next !== 'function') {
    // Let the prerenderer continue when `context.next` isn't available.
    return;
  }

  return await mw(context);
}
