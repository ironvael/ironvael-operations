import { NextRequest, NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/resend";

export interface LeadPayload {
  name: string;
  email: string;
  company?: string;
  businessStage?: string;
  primaryConstraint: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, businessStage, primaryConstraint } =
      body as LeadPayload;

    if (!name || !email || !primaryConstraint) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, primaryConstraint" },
        { status: 400 }
      );
    }

    const lead = {
      name: String(name).trim(),
      email: String(email).trim(),
      company: company ? String(company).trim() : undefined,
      businessStage: businessStage ? String(businessStage).trim() : undefined,
      primaryConstraint: String(primaryConstraint).trim(),
      receivedAt: new Date().toISOString(),
    };

    console.log("[IRONVAEL LEAD]", JSON.stringify(lead, null, 2));

    const { ok, error } = await sendLeadEmail(lead);
    if (!ok) {
      console.error("[IRONVAEL LEAD] Resend failed:", error);
      return NextResponse.json(
        { error: "Failed to send notification" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[IRONVAEL LEAD ERROR]", error);
    return NextResponse.json(
      { error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
