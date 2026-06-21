import React, { useEffect, useState } from 'react';

export default function ClientClerkUserButton(props) {
  const [UserButton, setUserButton] = useState(null);

  useEffect(() => {
    let mounted = true;
    import('../shims/clerk/components.mjs')
      .then((mod) => {
        if (mounted && mod.UserButton) return setUserButton(() => mod.UserButton);
        return import('@clerk/astro/components')
          .then((m2) => mounted && setUserButton(() => m2.UserButton ?? null))
          .catch(() => mounted && setUserButton(() => null));
      })
      .catch(() => {
        import('@clerk/astro/components')
          .then((m2) => mounted && setUserButton(() => m2.UserButton ?? null))
          .catch(() => mounted && setUserButton(() => null));
      });
    return () => (mounted = false);
  }, []);

  if (!UserButton) return null;
  const C = UserButton;
  return <C {...props} />;
}
