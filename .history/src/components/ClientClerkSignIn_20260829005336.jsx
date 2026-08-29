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

export default function ClientClerkSignIn({ publishableKey, ...props }) {
  const [status, setStatus] = useState(publishableKey ? 'loading' : 'disabled');

  useEffect(() => {
    if (!publishableKey) return;

    let mounted = true;
    const mountNode = document.getElementById('clerk-sign-in');

    loadClerkScript()
      .then(async (clerk) => {
        if (!mounted || !mountNode || !clerk) return;
        await clerk.load({ publishableKey });
        clerk.mountSignIn(mountNode, {
          routing: 'path',
          path: '/login',
          signUpUrl: '/login',
          afterSignInUrl: '/admin',
          ...props,
        });
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
    return (
      <div className="w-full max-w-md rounded-2xl border border-amber-500/20 bg-amber-500/10 p-8 text-center text-amber-100">
        <h1 className="text-xl font-semibold text-white">Clerk is not configured</h1>
        <p className="mt-3 text-sm leading-6 text-amber-100/80">
          Add CLERK_PUBLISHABLE_KEY to your environment to enable secure admin sign-in.
        </p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="w-full max-w-md rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-center text-red-100">
        <h1 className="text-xl font-semibold text-white">Unable to load sign-in</h1>
        <p className="mt-3 text-sm leading-6 text-red-100/80">
          Check your network connection and blishable key.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-[460px] w-full max-w-md">
      <div id="clerk-sign-in" />
      {status === 'loading' && (
        <div className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-8 text-center text-slate-300">
          Loading secure sign-in...
        </div>
      )}
    </div>
  );
}
