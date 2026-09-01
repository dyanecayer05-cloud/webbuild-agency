const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, projectType, budget, timeline, details } = data;
    if (!name || !email || !details) {
      return new Response(
        JSON.stringify({ error: "Missing required brief fields." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const leadPayload = {
      id: crypto.randomUUID(),
      name,
      email,
      projectType: projectType || "Bespoke Architecture",
      timeline: timeline || "Standard",
      details,
      submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
      status: "pending_review"
    };
    const webhookUrl = "https://discord.com/api/webhooks/your-id/your-token-here";
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [{
            title: `🚀 New Project Brief: ${name}`,
            color: 6514417,
            fields: [
              { name: "Email", value: email, inline: true },
              { name: "System Tier", value: leadPayload.projectType, inline: true },
              { name: "Timeline", value: leadPayload.timeline, inline: true },
              { name: "Requirements & Scope", value: details }
            ],
            footer: { text: `Lead ID: ${leadPayload.id} • Craft and Code` },
            timestamp: leadPayload.submittedAt
          }]
        })
      }).catch((err) => console.error("Webhook dispatch failed:", err));
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: "Brief captured successfully.",
        leadId: leadPayload.id
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Internal server error processing brief." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
