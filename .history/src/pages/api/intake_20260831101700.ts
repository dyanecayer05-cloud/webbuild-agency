// src/pages/api/intake.ts
import type { APIRoute } from 'astro';

export const prerender = false; // Runs as a serverless endpoint on Vercel

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, projectType, budget, timeline, details } = data;

    if (!name || !email || !details) {
      return new Response(
        JSON.stringify({ error: 'Missing required brief fields.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Lead payload ready for Supabase / Webhook / Email dispatch
    const leadPayload = {
      id: crypto.randomUUID(),
      name,
      email,
      projectType: projectType || 'Standard Web System',
      budget: budget || 'Flexible',
      timeline: timeline || 'Standard',
      details,
      submittedAt: new Date().toISOString(),
      status: 'pending_review'
    };

    // Log payload for serverless inspection (or pipe directly to database)
    console.log('New Lead Received:', leadPayload);

    return new Response(
      JSON.stringify({ success: true, message: 'Brief captured successfully.', leadId: leadPayload.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: 'Internal server error processing intake brief.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};