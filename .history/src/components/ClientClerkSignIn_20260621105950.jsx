import React, { useEffect, useState } from 'react';

export default function ClientClerkSignIn(props) {
  const [SignIn, setSignIn] = useState(null);

  useEffect(() => {
    let mounted = true;
    // Prefer local shim to avoid resolving Clerk internals during builds where Clerk isn't configured.
    import('../shims/clerk/components.mjs')
      .then((mod) => {
        if (mounted && mod.SignIn) return setSignIn(() => mod.SignIn);
        // Fallback to the real package if available
        return import('@clerk/astro/components')
          .then((m2) => mounted && setSignIn(() => m2.SignIn ?? null))
          .catch(() => mounted && setSignIn(() => null));
      })
      .catch(() => {
        import('@clerk/astro/components')
          .then((m2) => mounted && setSignIn(() => m2.SignIn ?? null))
          .catch(() => mounted && setSignIn(() => null));
      });
    return () => (mounted = false);
  }, []);

  if (!SignIn) return null;
  const C = SignIn;
  return <C {...props} />;
}
