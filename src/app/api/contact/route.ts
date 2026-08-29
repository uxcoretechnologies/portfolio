import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas/contact";

// Placeholder handler: validates input and logs it server-side.
// TODO: wire up a real email/CRM integration (e.g. Resend, SendGrid, HubSpot)
// once the senior provides production credentials.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  console.log("[contact] new submission:", parsed.data);

  return NextResponse.json({ ok: true });
}
