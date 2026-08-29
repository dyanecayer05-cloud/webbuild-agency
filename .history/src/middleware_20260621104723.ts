// Temporary no-op middleware for builds when Clerk is absent.
export async function onRequest(context) {
	// Pass through to the next middleware/handler during prerender and runtime.
	return await context.next();
}
