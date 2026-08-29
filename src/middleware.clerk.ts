// Backup of Clerk middleware (disabled). Rename to `middleware.ts` to enable.
// This middleware loads Clerk server helpers at runtime and conditionally
// protects `/admin` routes. Disabled to avoid interfering with static builds.
export const onRequest = undefined;

/*
import './lib/clerk-loader.mjs';
// Full middleware implementation is preserved in git history and in the
// patch file; restore when you want to enable runtime Clerk middleware.
*/
