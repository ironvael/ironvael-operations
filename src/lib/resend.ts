import { Resend } from "resend";

export interface LeadData {
  name: string;
  email: string;
  company?: string;
  businessStage?: string;
  primaryConstraint: string;
}

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function sendLeadEmail(lead: LeadData): Promise<{ ok: boolean; error?: string }> {
  const resend = getResend();
  if (!resend) {
    console.warn("[RESEND] RESEND_API_KEY not set. Lead logged only.");
    return { ok: true };
  }

  const from = process.env.RESEND_FROM_EMAIL ?? "Ironvael <onboarding@resend.dev>";
  const to = process.env.RESEND_TO_EMAIL ?? "hello@ironvael.com";

  const text = [
    lead.primaryConstraint,
    "",
    "—",
    `${lead.name}`,
    lead.email,
    lead.company ? lead.company : "",
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: system-ui, sans-serif; font-size: 15px; line-height: 1.6; color: #1a1a1a; max-width: 600px;">
  <div style="border-bottom: 1px solid #e5e5e5; padding-bottom: 16px; margin-bottom: 20px;">
    <p style="margin: 0; font-weight: 600;">New inquiry from ironvael.com</p>
  </div>
  <div style="white-space: pre-wrap;">${escapeHtml(lead.primaryConstraint)}</div>
  <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e5e5; font-size: 14px; color: #666;">
    <p style="margin: 0;"><strong>${escapeHtml(lead.name)}</strong></p>
    <p style="margin: 4px 0 0 0;"><a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a></p>
    ${lead.company ? `<p style="margin: 4px 0 0 0;">${escapeHtml(lead.company)}</p>` : ""}
  </div>
</body>
</html>
`.trim();

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: lead.email,
      subject: `Inquiry: ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
      text,
      html,
    });

    if (error) {
      console.error("[RESEND]", error);
      return { ok: false, error: error.message };
    }
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[RESEND]", err);
    return { ok: false, error: message };
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
