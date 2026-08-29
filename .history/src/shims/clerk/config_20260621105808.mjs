// Minimal Clerk virtual config shim used when resolving `virtual:@clerk/astro/config`.
export const clerkConfig = {
  publishableKey: process.env.CLERK_PUBLISHABLE_KEY ?? ''
};

export default clerkConfig;
