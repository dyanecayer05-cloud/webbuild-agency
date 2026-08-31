// src/lib/spec-engine.ts

export interface ClientBrief {
  id: string;
  name: string;
  email: string;
  projectType: string;
  timeline: string;
  details: string;
}

export interface GeneratedSpec {
  specId: string;
  client: string;
  architectureTier: string;
  recommendedStack: string[];
  coreDeliverables: string[];
  estimatedDeliveryDays: number;
}

export function generateArchitecturalSpec(brief: ClientBrief): GeneratedSpec {
  const isWebApp = brief.projectType.includes('Platform') || brief.projectType.includes('App');
  
  return {
    specId: `SPEC-${brief.id.slice(0, 8).toUpperCase()}`,
    client: brief.name,
    architectureTier: isWebApp ? 'Full-Stack Edge Application' : 'High-Performance Static Architecture',
    recommendedStack: isWebApp 
      ? ['Astro 6 / React', 'Cloudflare Edge / Vercel', 'Supabase PostgreSQL', 'Tailwind CSS']
      : ['Astro 6 Islands', 'Vercel Edge Global CDN', 'JSON-LD Schema Automation', 'Tailwind CSS'],
    coreDeliverables: [
      'Guaranteed 100/100 Core Web Vitals Optimization',
      'Local Business JSON-LD Search Schema Integration',
      'Responsive Glassmorphic UI with Micro-Interactions',
      'Full Clean Repository Export & Complete Client Ownership'
    ],
    estimatedDeliveryDays: brief.timeline.includes('Rush') ? 3 : 7
  };
}