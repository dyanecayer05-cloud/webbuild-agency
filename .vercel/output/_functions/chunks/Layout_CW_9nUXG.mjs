import { c as createComponent } from './astro-component_BieVnjpC.mjs';
import 'piccolore';
import { k as renderTemplate, q as renderSlot, v as renderHead, h as addAttribute } from './entrypoint_CnuVE3iZ.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "WebBuild: By CraftandCode | High-Performance Web Engineering",
    description = "Bespoke, high-performance web engineering for ambitious businesses."
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', `><link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2"><script src="https://cdn.tailwindcss.com"><\/script><script>
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              brand: {
                50: '#eef2ff',
                500: '#6366f1',
                600: '#4f46e5',
                700: '#4338ca',
              }
            }
          }
        }
      }
    <\/script><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">`, '</head> <body class="min-h-screen antialiased selection:bg-indigo-500 selection:text-white relative"> <!-- Ambient Radial Lighting --> <div class="fixed inset-0 pointer-events-none -z-10 overflow-hidden"> <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px]"></div> <div class="absolute top-[40%] -left-40 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[160px]"></div> </div> ', " </body></html>"])), title, addAttribute(description, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/devdyanecayer/hilal_bd_holdings/hh_solutions/solutions_subparent/modules/webbuild-agency-main/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
