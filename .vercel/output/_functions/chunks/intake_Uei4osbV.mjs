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
      projectType: projectType || "Standard Web System",
      budget: budget || "Flexible",
      timeline: timeline || "Standard",
      details,
      submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
      status: "pending_review"
    };
    console.log("New Lead Received:", leadPayload);
    return new Response(
      JSON.stringify({ success: true, message: "Brief captured successfully.", leadId: leadPayload.id }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Internal server error processing intake brief." }),
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
