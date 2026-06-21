// Minimal server-side stubs for @clerk/astro/server
export function clerkMiddleware(handler) {
  // return a middleware wrapper that simply calls handler but provides minimal API
  return async (context) => {
    // Provide a minimal auth() function that reports no user
    const auth = () => ({ userId: null, redirectToSignIn: () => new Response(null, { status: 302 }) });
    const result = await handler(() => auth, context);
    return result ?? context.next?.();
  };
}

export function createRouteMatcher(_patterns) {
  return () => false;
}
