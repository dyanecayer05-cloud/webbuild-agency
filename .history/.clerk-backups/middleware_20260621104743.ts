// Backup of middleware used when Clerk was enabled
export async function onRequest(context) {
  // original middleware logic was moved to backups during build troubleshooting
  return await context.next?.();
}
