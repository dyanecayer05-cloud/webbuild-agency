// src/pages/api/intake.ts
import type { APIRoute } from 'astro';

export const prerender = false;

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

    const leadPayload = {
      id: crypto.randomUUID(),
      name,
      email,
      projectType: projectType || 'Bespoke Architecture',
      timeline: timeline || 'Standard',
      details,
      submittedAt: new Date().toISOString(),
      status: 'pending_review'
    };

    // Optional: Send instant Discord notification if WEBHOOK_URL is set
    const webhookUrl = import.meta.env.DISCORD_WEBHOOK_URL || process.env.DISCORD_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [{
            title: `🚀 New Project Brief: ${name}`,
            color: 0x6366f1,
            fields: [
              { name: 'Email', value: email, inline: true },
              { name: 'System Tier', value: leadPayload.projectType, inline: true },
              { name: 'Timeline', value: leadPayload.timeline, inline: true },
              { name: 'Requirements & Scope', value: details }
            ],
            footer: { text: `Lead ID: ${leadPayload.id} • Craft and Code` },
            timestamp: leadPayload.submittedAt
          }]
        })
      }).catch(err => console.error('Webhook dispatch failed:', err));
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Brief captured successfully.', 
        leadId: leadPayload.id 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: 'Internal server error processing brief.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};