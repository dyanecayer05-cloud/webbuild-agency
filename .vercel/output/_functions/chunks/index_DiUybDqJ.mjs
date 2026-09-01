import { c as createComponent } from './astro-component_BieVnjpC.mjs';
import 'piccolore';
import { m as maybeRenderHead, k as renderTemplate, h as addAttribute, o as renderComponent } from './entrypoint_CnuVE3iZ.mjs';
import { $ as $$Layout } from './Layout_CW_9nUXG.mjs';
import 'clsx';
import { r as renderScript } from './script_zqxn1RxM.mjs';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 w-full bg-slate-950/85 backdrop-blur-xl border-b border-white/[0.08]"> <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"> <!-- Brand Identity: Craft and Code by H.H. Solutions --> <a href="#home" class="flex items-center gap-3 group"> <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.25)] group-hover:border-indigo-400 transition-all duration-300"> <svg class="w-6 h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16 6L24 10.5L20 12.8L16 10.5L12 12.8L16 6Z" fill="#818cf8" fill-opacity="0.4" stroke="#a5b4fc" stroke-width="1.25" stroke-linejoin="round"></path> <path d="M7 11.5L13 8V14L10 15.7V19.3L13 21V24L7 20.5V11.5Z" fill="#4f46e5" fill-opacity="0.65" stroke="#818cf8" stroke-width="1.5" stroke-linejoin="round"></path> <path d="M25 11.5L19 8V11L22 12.7V19.3L16 22.8L16 26L25 20.5V11.5Z" fill="#06b6d4" fill-opacity="0.35" stroke="#22d3ee" stroke-width="1.5" stroke-linejoin="round"></path> <circle cx="16" cy="16.5" r="1.75" fill="#38bdf8"></circle> </svg> </div> <div> <span class="font-bold text-lg tracking-tight text-white group-hover:text-indigo-200 transition">
Craft and Code
</span> <span class="block text-[10px] font-mono tracking-widest text-indigo-400 uppercase -mt-0.5 font-semibold">
by H.H. Solutions
</span> </div> </a> <!-- Navigation --> <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300"> <a href="#home" class="hover:text-white transition-colors">Home</a> <a href="#about" class="hover:text-white transition-colors">About</a> <a href="#features" class="hover:text-white transition-colors">Features</a> <a href="#process" class="hover:text-white transition-colors">Process</a> <a href="#pricing" class="hover:text-white transition-colors">Pricing</a> </nav> <!-- Standalone Glow CTA --> <div class="flex items-center gap-4"> <a href="#contact" class="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-all duration-200">
Start Project
</a> </div> </div> </header>`;
}, "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/components/Navbar.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="home" class="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"> <!-- Single Hero Badge --> <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(99,102,241,0.15)] max-w-full"> <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span> <span class="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 truncate sm:overflow-visible">
Small Business Supporting Small Businesses
</span> <span class="text-indigo-400 text-xs hidden sm:inline">•</span> <span class="text-xs font-mono text-indigo-300 font-medium hidden sm:inline">
NC &amp; Nationwide
</span> </div> <!-- Main Headline --> <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight sm:leading-none max-w-4xl mx-auto font-display">
Premium web engineering, built to elevate <span class="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">any vision, anywhere.</span> </h1> <p class="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
Bespoke static architecture designed for local trades, emerging creators, and modern businesses. No bloated agency retainers, no WordPress slowdowns, and zero sales calls.
</p> <!-- CTAs --> <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"> <a href="/#contact" class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] hover:-translate-y-0.5 transition duration-200 text-center">
Start Your Project
</a> <a href="/#pricing" class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:border-slate-500 hover:text-white transition duration-200 text-center">
View Pricing Plans
</a> </div> </div> </section>`;
}, "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/components/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const tracks = [
    {
      title: "Local Trades & Service Pros",
      desc: "Contractors, plumbers, and local shops who need to turn local search intent into direct phone calls and booked appointments.",
      tag: "High Local Visibility"
    },
    {
      title: "Startups & Emerging Creators",
      desc: "Independent founders who need a striking digital presence that builds immediate credibility with investors and customers.",
      tag: "Brand Authority"
    },
    {
      title: "Bespoke Digital Platforms",
      desc: "Custom booking tools, intake engines, and client portals built to automate workflows without monthly SaaS lock-in.",
      tag: "Custom Architecture"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="about" class="w-full max-w-7xl mx-auto px-6 py-28 scroll-mt-24 border-t border-white/[0.06]"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"> <div class="lg:col-span-5"> <div class="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-3 font-mono">Positioning</div> <h2 class="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
We bridge the gap between <span class="text-indigo-400">enterprise speed</span> and small business.
</h2> <p class="text-gray-400 leading-relaxed text-base mb-6">
Most web agencies overcomplicate development to justify large retainers. We do the opposite: zero bloated plugins, instant sub-second static loads, and clean code that works for your bottom line.
</p> </div> <div class="lg:col-span-7 space-y-4"> ${tracks.map((item) => renderTemplate`<div class="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-500/30 backdrop-blur-sm transition duration-300"> <div class="flex items-center justify-between mb-2"> <h3 class="text-lg font-bold text-white">${item.title}</h3> <span class="text-xs px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium font-mono">${item.tag}</span> </div> <p class="text-sm text-gray-400 leading-relaxed">${item.desc}</p> </div>`)} </div> </div> </section>`;
}, "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/components/About.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      badge: "Speed & Performance",
      title: "Guaranteed 100/100 Core Web Vitals",
      desc: "Engineered with modern static architecture for sub-second paint times on mobile networks. Zero bloated WordPress plugins, zero lag, and instant page hops.",
      metric: "0.2s",
      metricLabel: "Average Load Time",
      gradient: "from-cyan-500/10 to-indigo-500/5",
      border: "group-hover:border-cyan-500/40",
      glow: "text-cyan-400"
    },
    {
      badge: "Cost Efficiency",
      title: "Zero Monthly Server or Plugin Fees",
      desc: "Deployed to global edge delivery networks. Your baseline hosting overhead drops to $0/month—no unexpected maintenance retainers or plugin license renewals.",
      metric: "$0/mo",
      metricLabel: "Baseline Server Cost",
      gradient: "from-emerald-500/10 to-indigo-500/5",
      border: "group-hover:border-emerald-500/40",
      glow: "text-emerald-400"
    },
    {
      badge: "Search Dominance",
      title: "Automated Local Schema Injection",
      desc: "Every site includes pre-configured Google JSON-LD structured data (LocalBusiness, GeoCoordinates, Reviews), indexing you properly in local map packs.",
      metric: "JSON-LD",
      metricLabel: "Google Schema Verified",
      gradient: "from-indigo-500/10 to-purple-500/5",
      border: "group-hover:border-indigo-500/40",
      glow: "text-indigo-400"
    },
    {
      badge: "Zero Friction",
      title: "100% Async Delivery. Zero Sales Calls.",
      desc: "No 60-minute discovery pitches. Fill out the project brief online in under 5 minutes, track progress in your client portal, and review staging within 72 hours.",
      metric: "72 hrs",
      metricLabel: "Staging Turnaround",
      gradient: "from-purple-500/10 to-pink-500/5",
      border: "group-hover:border-purple-500/40",
      glow: "text-purple-400"
    },
    {
      badge: "Independence",
      title: "Total Code & Asset Ownership",
      desc: "No proprietary builder lock-in (like Wix or Squarespace). You receive a clean Git repository and production build that you own outright forever.",
      metric: "100%",
      metricLabel: "Client Ownership",
      gradient: "from-fuchsia-500/10 to-cyan-500/5",
      border: "group-hover:border-fuchsia-500/40",
      glow: "text-fuchsia-400"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="features" class="w-full max-w-7xl mx-auto px-6 py-28 scroll-mt-24 border-t border-white/[0.06]"> <div class="max-w-3xl mb-16"> <div class="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-3 font-mono">The WebBuild Edge</div> <h2 class="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
Why modern businesses choose bespoke engineering.
</h2> <p class="text-slate-400 text-lg leading-relaxed">
Compare our sub-second static builds and zero-overhead architecture against legacy WordPress agencies and restrictive DIY builders.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${features.map((item) => renderTemplate`<div${addAttribute(`group relative p-8 rounded-2xl border border-white/[0.08] bg-gradient-to-b ${item.gradient} bg-slate-950/60 backdrop-blur-xl transition-all duration-300 ${item.border} flex flex-col justify-between hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]`, "class")}> <div> <div class="flex items-center justify-between mb-4"> <span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08]"> ${item.badge} </span> <span${addAttribute(`font-mono text-xl font-extrabold ${item.glow}`, "class")}>${item.metric}</span> </div> <h3 class="text-xl font-bold text-white mb-3 tracking-tight">${item.title}</h3> <p class="text-slate-400 text-sm leading-relaxed">${item.desc}</p> </div> <div class="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-slate-500 font-mono"> <span>Standard: Guaranteed</span> <span class="text-slate-400">${item.metricLabel}</span> </div> </div>`)} </div> </section>`;
}, "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/components/Features.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      num: "01",
      title: "Intake & Project Scope",
      desc: "Fill out the simple intake brief below. Tell us your goals, target audience, and style preferences without having to sit through high-pressure sales calls."
    },
    {
      num: "02",
      title: "Engineering Sprint",
      desc: "We build your bespoke responsive architecture, inject Google-compliant Schema.org LocalBusiness metadata, and test for perfect Lighthouse 100 performance."
    },
    {
      num: "03",
      title: "Production DNS Cutover",
      desc: "We connect your custom domain, provision automated global SSL, and launch your turnkey digital presence to the world."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="process" class="w-full max-w-7xl mx-auto px-6 py-28 scroll-mt-24 border-t border-white/[0.06]"> <div class="max-w-3xl mb-16"> <div class="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-3 font-mono">How We Build</div> <h2 class="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
Transparent, sprint-based delivery.
</h2> <p class="text-gray-400 text-lg leading-relaxed">
A systematic build pipeline designed to take your site from concept to live deployment with maximum speed.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${steps.map((step) => renderTemplate`<div class="relative p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-indigo-500/40 transition duration-300 flex flex-col justify-between"> <div> <span class="font-mono text-3xl font-bold text-indigo-400/40 mb-6 block">${step.num}</span> <h3 class="text-xl font-bold text-white mb-3">${step.title}</h3> <p class="text-sm text-gray-400 leading-relaxed">${step.desc}</p> </div> </div>`)} </div> </section>`;
}, "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/components/Process.astro", void 0);

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="pricing" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 scroll-mt-24 border-t border-slate-800/50"> <h2 class="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Accessible, honest pricing</h2> <p class="mt-4 text-slate-400">Premium web engineering shouldn't require a bank loan. Enjoy our 0% interest monthly payment plans.</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="group bg-slate-800/30 border border-slate-800 p-8 rounded-xl flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] relative"> <div class="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div> <div class="relative z-10 mb-4"> <span class="bg-slate-800 text-slate-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-700">0% Interest</span> </div> <h3 class="relative z-10 text-xl font-semibold text-slate-100">Starter</h3> <p class="relative z-10 mt-2 text-slate-400 text-sm">Perfect for establishing a clean, fast online presence.</p> <div class="relative z-10 mt-6 flex items-baseline gap-2"> <span class="text-4xl font-bold text-white">$75</span> <span class="text-slate-400 font-medium">/ mo</span> </div> <p class="relative z-10 mt-1 text-xs text-slate-500">For 4 months ($300 total)</p> <ul class="relative z-10 mt-8 mb-8 space-y-4 text-sm text-slate-300"> <li class="flex items-center gap-3"><svg class="w-5 h-5 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Single Page Layout</li> <li class="flex items-center gap-3"><svg class="w-5 h-5 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Contact Form Integration</li> <li class="flex items-center gap-3"><svg class="w-5 h-5 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Mobile & SEO Optimized</li> </ul> <a href="#contact" class="relative z-10 mt-auto block w-full py-3 px-4 bg-slate-800 border border-slate-700 text-slate-200 rounded-lg text-center font-medium transition-all duration-300 hover:bg-slate-700 hover:border-slate-500 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]">Choose Starter</a> </div> <div class="group bg-slate-800 border border-indigo-500/50 p-8 rounded-xl relative flex flex-col transform md:-translate-y-4 shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300 hover:-translate-y-6 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:border-indigo-500"> <div class="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div> <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-[0_0_15px_rgba(99,102,241,0.4)] z-20">Most Popular</div> <div class="relative z-10 mb-4 mt-2"> <span class="bg-indigo-500/10 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-indigo-500/20">0% Interest</span> </div> <h3 class="relative z-10 text-xl font-semibold text-slate-100">Professional</h3> <p class="relative z-10 mt-2 text-slate-400 text-sm">Everything a growing local business needs to scale.</p> <div class="relative z-10 mt-6 flex items-baseline gap-2"> <span class="text-4xl font-bold text-white">$150</span> <span class="text-slate-400 font-medium">/ mo</span> </div> <p class="relative z-10 mt-1 text-xs text-slate-400">For 4 months ($600 total)</p> <ul class="relative z-10 mt-8 mb-8 space-y-4 text-sm text-slate-300"> <li class="flex items-center gap-3"><svg class="w-5 h-5 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Up to 5 Pages</li> <li class="flex items-center gap-3"><svg class="w-5 h-5 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Advanced SEO Setup</li> <li class="flex items-center gap-3"><svg class="w-5 h-5 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Google Analytics Integration</li> </ul> <a href="#contact" class="relative z-10 mt-auto block w-full py-3 px-4 bg-indigo-500 text-white rounded-lg text-center font-bold transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:bg-indigo-400 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]">Choose Pro</a> </div> <div class="group bg-slate-800/30 border border-slate-800 p-8 rounded-xl flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-fuchsia-500/40 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] relative"> <div class="absolute inset-0 bg-linear-to-br from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div> <div class="relative z-10 mb-4"> <span class="bg-slate-800 text-slate-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-700">Flexible Milestones</span> </div> <h3 class="relative z-10 text-xl font-semibold text-slate-100">E-Commerce</h3> <p class="relative z-10 mt-2 text-slate-400 text-sm">For retail shops ready to sell their inventory directly online.</p> <div class="relative z-10 mt-6 flex items-baseline gap-2"> <span class="text-4xl font-bold text-white">Custom</span> </div> <p class="relative z-10 mt-1 text-xs text-slate-500">Tailored 0% payment plans available</p> <ul class="relative z-10 mt-8 mb-8 space-y-4 text-sm text-slate-300"> <li class="flex items-center gap-3"><svg class="w-5 h-5 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Full Store Setup</li> <li class="flex items-center gap-3"><svg class="w-5 h-5 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Secure Payment Gateway</li> <li class="flex items-center gap-3"><svg class="w-5 h-5 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Inventory Management</li> </ul> <a href="#contact" class="relative z-10 mt-auto block w-full py-3 px-4 bg-slate-800 border border-slate-700 text-slate-200 rounded-lg text-center font-medium transition-all duration-300 hover:bg-slate-700 hover:border-slate-500 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]">Let's Talk</a> </div> </div> </section>`;
}, "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/components/Pricing.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      quote: "Our old WordPress site was taking 6 seconds to load and costing us hundreds a month in maintenance. Craft and Code launched our new site in 3 days, loads instantly, and we've already seen an uptick in calls.",
      author: "Marcus Vance",
      role: "Owner, Vance Mechanical",
      tag: "Trade Services"
    },
    {
      quote: "Skipping the sales meetings and just submitting our brief was a breath of fresh air. The design is sleeker than anything an expensive agency quoted us, and we own 100% of our code.",
      author: "Elena Rostova",
      role: "Founder, Horizon Media",
      tag: "Creator Platform"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="testimonials" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 scroll-mt-24 border-t border-slate-800/50"> <div class="text-center max-w-3xl mx-auto mb-16"> <div class="text-xs uppercase tracking-widest text-indigo-400 font-mono font-bold mb-2">Client Trust</div> <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
Built for real business outcomes.
</h2> <p class="mt-3 text-slate-300 text-sm sm:text-base">
See how moving away from slow templates and agency bloat drives immediate growth.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${testimonials.map((t) => renderTemplate`<div class="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between relative hover:border-indigo-500/30 transition"> <p class="text-slate-200 text-sm sm:text-base leading-relaxed italic">
"${t.quote}"
</p> <div class="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between"> <div> <div class="font-bold text-white text-sm">${t.author}</div> <div class="text-xs text-slate-400">${t.role}</div> </div> <span class="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-indigo-300"> ${t.tag} </span> </div> </div>`)} </div> </section>`;
}, "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/components/Testimonials.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 scroll-mt-24"> <div class="text-center mb-10"> <div class="text-xs uppercase tracking-widest text-indigo-400 font-mono font-bold mb-2">Start Your Project</div> <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
Let's build something exceptional.
</h2> <p class="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
Submit your project parameters below. You'll receive a detailed scope breakdown and staging schedule within 24 hours.
</p> </div> <div class="bg-slate-900/80 border border-slate-800 p-6 sm:p-10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]"> <form id="intake-form" class="space-y-6"> <div> <label for="name" class="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
Your Name / Company
</label> <input type="text" id="name" name="name" required placeholder="Jane Doe or Apex Co." class="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition"> </div> <div> <label for="email" class="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
Email Address
</label> <input type="email" id="email" name="email" required placeholder="jane@company.com" class="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition"> </div> <div> <label for="systemType" class="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
System Type
</label> <select id="systemType" name="systemType" class="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500 transition"> <option value="Bespoke Static Architecture">Bespoke Static Architecture</option> <option value="Custom Web Platform">Custom Web Platform</option> <option value="E-Commerce & Inventory">E-Commerce &amp; Inventory</option> <option value="Performance & SEO Migration">Performance &amp; SEO Migration</option> </select> </div> <div> <label for="timeline" class="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
Target Timeline
</label> <select id="timeline" name="timeline" class="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500 transition"> <option value="Rush (3-5 Days)">Rush (3–5 Days)</option> <option value="Standard (1-2 Weeks)">Standard (1–2 Weeks)</option> <option value="Flexible">Flexible</option> </select> </div> <div> <label for="notes" class="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
Project Notes &amp; Objectives
</label> <textarea id="notes" name="notes" rows="4" placeholder="Tell us about your goals, features, or design inspirations..." class="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition resize-none"></textarea> </div> <button type="submit" id="submit-btn" class="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white font-bold text-sm shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] transition active:scale-[0.99]">
Send Project Brief
</button> <div id="form-feedback" class="hidden text-center text-xs font-mono mt-3"></div> </form> </div> </section> ${renderScript($$result, "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/components/Contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-gray-950 border-t border-white/[0.08] py-16 px-6"> <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/[0.06]"> <!-- Brand Info --> <div class="md:col-span-6 space-y-4"> <a href="#home" class="font-display font-bold text-xl tracking-tight text-white flex items-center gap-2"> <span class="text-indigo-400">WebBuild</span> <span class="text-xs text-gray-400 font-sans font-normal">by CraftandCode</span> </a> <p class="text-sm text-gray-400 max-w-sm leading-relaxed">
High-performance static web engineering and custom digital platforms built to elevate small businesses and independent creators.
</p> </div> <!-- Quick Links (Matches Page Sequence) --> <div class="md:col-span-3 space-y-3"> <div class="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">Navigation</div> <ul class="space-y-2 text-sm text-gray-400"> <li><a href="#home" class="hover:text-white transition-colors">Home</a></li> <li><a href="#about" class="hover:text-white transition-colors">About</a></li> <li><a href="#process" class="hover:text-white transition-colors">Process</a></li> <li><a href="#pricing" class="hover:text-white transition-colors">Pricing</a></li> <li><a href="#contact" class="hover:text-indigo-400 transition-colors">Start Project</a></li> </ul> </div> <!-- Legal & Contact --> <div class="md:col-span-3 space-y-3"> <div class="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">Direct</div> <ul class="space-y-2 text-sm text-gray-400"> <li><a href="#contact" class="hover:text-white transition-colors">Client Brief Intake</a></li> <li><span class="text-gray-500">NC & Nationwide Delivery</span></li> </ul> </div> </div> <div class="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500"> <p>&copy; ${currentYear} Craft and Code by H.H. Solutions. All rights reserved.</p> <p class="text-gray-400">Built for speed, zero bloat.</p> </div> </footer>`;
}, "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Craft and Code by H.H. Solutions | High-Performance Web Engineering" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="w-full flex flex-col items-center overflow-x-hidden"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/pages/index.astro", void 0);

const $$file = "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
