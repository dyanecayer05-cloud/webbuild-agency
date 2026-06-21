// Minimal Clerk integration shim used at build-time when real Clerk is unavailable.
export default function clerk() {
  return {
    name: 'clerk-shim'
  };
}
