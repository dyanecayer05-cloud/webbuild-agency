import { c as createComponent } from './astro-component_Bk303lu1.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_DcaL-nbQ.mjs';
import { $ as $$Layout } from './Layout_dLtWS5FA.mjs';
import React, { useState, useEffect } from 'react';

const CLERK_SCRIPT_ID = "clerk-browser-js";
const CLERK_SCRIPT_SRC = "https://js.clerk.com/v5/clerk.browser.js";
function loadClerkScript() {
  if (window.Clerk) return Promise.resolve(window.Clerk);
  const existingScript = document.getElementById(CLERK_SCRIPT_ID);
  if (existingScript) {
    return new Promise((resolve, reject) => {
      existingScript.addEventListener("load", () => resolve(window.Clerk), { once: true });
      existingScript.addEventListener("error", reject, { once: true });
    });
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = CLERK_SCRIPT_ID;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.src = CLERK_SCRIPT_SRC;
    script.addEventListener("load", () => resolve(window.Clerk), { once: true });
    script.addEventListener("error", reject, { once: true });
    document.head.appendChild(script);
  });
}
function ClientClerkSignIn({ publishableKey, ...props }) {
  const [status, setStatus] = useState(publishableKey ? "loading" : "disabled");
  useEffect(() => {
    if (!publishableKey) return;
    let mounted = true;
    const mountNode = document.getElementById("clerk-sign-in");
    loadClerkScript().then(async (clerk) => {
      if (!mounted || !mountNode || !clerk) return;
      await clerk.load({ publishableKey });
      clerk.mountSignIn(mountNode, {
        routing: "path",
        path: "/login",
        signUpUrl: "/login",
        afterSignInUrl: "/admin",
        ...props
      });
      if (mounted) setStatus("ready");
    }).catch(() => {
      if (mounted) setStatus("error");
    });
    return () => {
      mounted = false;
    };
  }, [publishableKey]);
  if (status === "disabled") {
    return /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-md rounded-2xl border border-amber-500/20 bg-amber-500/10 p-8 text-center text-amber-100" }, /* @__PURE__ */ React.createElement("h1", { className: "text-xl font-semibold text-white" }, "Clerk is not configured"), /* @__PURE__ */ React.createElement("p", { className: "mt-3 text-sm leading-6 text-amber-100/80" }, "Add CLERK_PUBLISHABLE_KEY to your environment to enable secure admin sign-in."));
  }
  if (status === "error") {
    return /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-md rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-center text-red-100" }, /* @__PURE__ */ React.createElement("h1", { className: "text-xl font-semibold text-white" }, "Unable to load sign-in"), /* @__PURE__ */ React.createElement("p", { className: "mt-3 text-sm leading-6 text-red-100/80" }, "Check your network connection and blishable key."));
  }
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-[460px] w-full max-w-md" }, /* @__PURE__ */ React.createElement("div", { id: "clerk-sign-in" }), status === "loading" && /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl border border-slate-700/60 bg-slate-900/70 p-8 text-center text-slate-300" }, "Loading secure sign-in..."));
}

const $$Login = createComponent(($$result, $$props, $$slots) => {
  const clerkPublishableKey = process.env.CLERK_PUBLISHABLE_KEY ?? undefined                                             ?? "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Agency OS | Secure Login" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-screen w-full items-center justify-center px-4 py-16"> <div class="relative w-full max-w-md"> <div class="absolute inset-0 rounded-full bg-indigo-500/20 blur-[80px] pointer-events-none"></div> ${renderComponent($$result2, "ClientClerkSignIn", ClientClerkSignIn, { "publishableKey": clerkPublishableKey, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/components/ClientClerkSignIn.jsx", "client:component-export": "default" })} </div> </main> ` })}`;
}, "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/pages/login.astro", void 0);
const $$file = "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
