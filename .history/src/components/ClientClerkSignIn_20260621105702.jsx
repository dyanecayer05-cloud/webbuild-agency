import React, { useEffect, useState } from 'react';

export default function ClientClerkSignIn(props) {
  const [SignIn, setSignIn] = useState(null);

  useEffect(() => {
    let mounted = true;
    import('@clerk/astro/components')
      .then((mod) => {
        if (mounted) setSignIn(() => mod.SignIn ?? null);
      })
      .catch(() => setSignIn(() => null));
    return () => (mounted = false);
  }, []);

  if (!SignIn) return null;
  const C = SignIn;
  return <C {...props} />;
}
