import React, { useEffect, useState } from 'react';

const CLERK_SCRIPT_ID = 'clerk-browser-js';
const CLERK_SCRIPT_SRC = 'https://js.clerk.com/v5/clerk.browser.js';

function loadClerkScript() {
  if (window.Clerk) return Promise.resolve(window.Clerk);

  const existingScript = document.getElementById(CLERK_SCRIPT_ID);
  if (existingScript) {
    return new Promise((resolve, reject) => {
      existingScript.addEventListener('load', () => resolve(window.Clerk), { once: true });
      existingScript.addEventListener('error', reject, { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.id = CLERK_SCRIPT_ID;
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = CLERK_SCRIPT_SRC;
    script.addEventListener('load', () => resolve(window.Clerk), { once: true });
    script.addEventListener('error', reject, { once: true });
    document.head.appendChild(script);
  });
}

export default function ClientClerkUserButton({ publishableKey, ...props }) {
  const [status, setStatus] = useState(publishableKey ? 'loading' : 'disabled');

  useEffect(() => {
    if (!publishableKey) return;

    let mounted = true;
    const mountNode = document.getElementById('clerk-user-button');

    loadClerkScript()
      .then(async (clerk) => {
        if (!mounted || !mountNode || !clerk) return;
        await clerk.load({ publishableKey });
        clerk.mountUserButton(mountNode, props);
        if (mounted) setStatus('ready');
      })
      .catch(() => {
        if (mounted) setStatus('error');
      });

    return () => {
      mounted = false;
    };
  }, [publishableKey]);

  if (status === 'disabled') {
    return <div className="h-8 w-8 rounded-full bg-amber-500/30" title="Clerk is not configured" />;
  }

  if (status === 'error') {
    return <div className="h-8 w-8 rounded-full bg-red-500/40" title="Unable to load Clerk" />;
  }

  return (
    <div className="h-8 w-8">
      <div id="clerk-user-button" />
      {status === 'loading' && <div className="h-8 w-8 animate-pulse rounded-full bg-slate-700" />}
    </div>
  );
}
