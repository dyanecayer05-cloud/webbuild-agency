import { c as createComponent } from './astro-component_Bk303lu1.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_DcaL-nbQ.mjs';
import { r as renderScript } from './script_BM6q96Me.mjs';
import { $ as $$Layout } from './Layout_dLtWS5FA.mjs';

const $$Admin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin Command Center | Craft and Code by H.H. Solutions" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col"> <!-- Top Bar --> <header class="h-20 border-b border-white/[0.08] px-6 sm:px-10 flex items-center justify-between bg-slate-900/50 backdrop-blur-xl"> <div class="flex items-center gap-3"> <div class="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 border border-indigo-500/40"> <span class="font-mono text-xs font-bold text-indigo-400">CC</span> </div> <div> <h1 class="font-bold text-base tracking-tight text-white">Agency Operations Hub</h1> <p class="text-[10px] font-mono text-indigo-400 uppercase">Craft and Code Admin</p> </div> </div> <div class="flex items-center gap-4"> <a href="/" class="text-xs text-slate-400 hover:text-white transition">View Live Site &rarr;</a> ${renderComponent($$result2, "ClientClerkUserButton", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/components/ClientClerkUserButton.jsx", "client:component-export": "default" })} </div> </header> <!-- Main Dashboard Grid --> <main class="flex-1 max-w-7xl w-full mx-auto p-6 sm:p-10 space-y-8"> <!-- Metrics Row --> <div class="grid grid-cols-1 sm:grid-cols-3 gap-6"> <div class="glow-card rounded-2xl p-6 bg-slate-900/60 border border-white/[0.08]"> <div class="text-xs font-mono text-slate-400 uppercase">System Status</div> <div class="text-2xl font-bold text-emerald-400 mt-2 flex items-center gap-2"> <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
100% Operational
</div> <p class="text-xs text-slate-500 mt-2">Vercel Edge Global CDN • Static Tier</p> </div> <div class="glow-card rounded-2xl p-6 bg-slate-900/60 border border-white/[0.08]"> <div class="text-xs font-mono text-slate-400 uppercase">Core Web Vitals Target</div> <div class="text-2xl font-bold text-indigo-400 mt-2">100 / 100</div> <p class="text-xs text-slate-500 mt-2">Sub-50ms TTFB across edge regions</p> </div> <div class="glow-card rounded-2xl p-6 bg-slate-900/60 border border-white/[0.08]"> <div class="text-xs font-mono text-slate-400 uppercase">Automated Testing</div> <div class="text-2xl font-bold text-cyan-400 mt-2">12 / 12 Passing</div> <p class="text-xs text-slate-500 mt-2">Desktop, Mobile Safari, iPad Pro</p> </div> </div> <!-- Quick Spec Generator Utility --> <div class="glow-card rounded-2xl p-8 bg-slate-900/60 border border-white/[0.08]"> <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6"> <div> <h2 class="text-xl font-bold text-white tracking-tight">Instant Architecture Spec Engine</h2> <p class="text-xs text-slate-400">Generate structured scope breakdowns and architecture stacks for incoming leads.</p> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="space-y-4"> <div> <label class="block text-xs font-mono uppercase text-slate-400 mb-1">Client / Project</label> <input type="text" id="demo-client" value="Apex Holdings" class="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-white/[0.1] text-sm text-white"> </div> <div> <label class="block text-xs font-mono uppercase text-slate-400 mb-1">Tier</label> <select id="demo-tier" class="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-white/[0.1] text-sm text-white"> <option value="Bespoke Business Site">Bespoke Static Architecture</option> <option value="Full Digital Platform">Full Digital Web Platform</option> <option value="Performance Rebuild">Performance Re-platform</option> </select> </div> <button id="gen-spec-btn" class="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 font-semibold text-xs text-white transition">
Run Spec Generation
</button> </div> <div class="rounded-xl bg-slate-950 border border-white/[0.08] p-4 font-mono text-xs text-indigo-300 overflow-x-auto"> <pre id="spec-output">// Click "Run Spec Generation" to generate output...</pre> </div> </div> </div> </main> </div> ` })} ${renderScript($$result, "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/pages/admin.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/pages/admin.astro", void 0);

const $$file = "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
