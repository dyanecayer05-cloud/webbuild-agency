// Middleware that only loads Clerk when CLERK_PUBLISHABLE_KEY is present at build/runtime.
// This keeps prerender and static builds safe.
// Export middleware only when Clerk is explicitly configured. When
// `CLERK_PUBLISHABLE_KEY` is not set, we avoid exporting `onRequest` so
// Astro's prerenderer isn't interfered with during static builds.
export const onRequest = process.env.CLERK_PUBLISHABLE_KEY
  ? (async function (context) {
      // Dynamically load server helpers to avoid static resolution of
      // platform-specific virtual imports inside `@clerk/astro`.
      const loader = await import('./lib/clerk-loader.mjs');
      const serverMod = await loader.loadClerkServer();
      const { clerkMiddleware, createRouteMatcher } = serverMod;
      const isProtectedRoute = createRouteMatcher(['/admin(.*)']);

      const mw = clerkMiddleware((auth, ctx) => {
        if (!auth().userId && isProtectedRoute(ctx.request)) {
          return auth().redirectToSignIn();
        }
        if (typeof ctx.next === 'function') return ctx.next();
        return new Response(null, { status: 200 });
      });

      // If `context.next` isn't present, let the prerenderer proceed by not
      // returning a Response object here (Astro will handle rendering).
      if (typeof context.next !== 'function') return;

      return await mw(context);
    })
  : undefined;
