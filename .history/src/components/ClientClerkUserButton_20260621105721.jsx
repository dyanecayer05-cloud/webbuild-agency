import React, { useEffect, useState } from 'react';

export default function ClientClerkUserButton(props) {
  const [UserButton, setUserButton] = useState(null);

  useEffect(() => {
    let mounted = true;
    import('@clerk/astro/components')
      .then((mod) => {
        if (mounted) setUserButton(() => mod.UserButton ?? null);
      })
      .catch(() => setUserButton(() => null));
    return () => (mounted = false);
  }, []);

  if (!UserButton) return null;
  const C = UserButton;
  return <C {...props} />;
}
