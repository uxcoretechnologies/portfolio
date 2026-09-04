import { NextResponse } from "next/server";
import { applySchema } from "@/lib/schemas/apply";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = applySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.CAREERS_GAS_WEBHOOK_URL;

  if (!webhookUrl || webhookUrl.includes("REPLACE_WITH")) {
    console.warn("[careers] CAREERS_GAS_WEBHOOK_URL is not configured — skipping webhook.");
    return NextResponse.json({ ok: true });
  }

  try {
    const gasRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
      signal: AbortSignal.timeout(15_000),
    });

    if (!gasRes.ok) {
      console.error("[careers] GAS webhook returned:", gasRes.status, await gasRes.text());
      return NextResponse.json({ ok: false, error: "Webhook error" }, { status: 502 });
    }

    const data = await gasRes.json().catch(() => null);
    if (data && data.success === false) {
      console.error("[careers] GAS script error:", data.error);
      return NextResponse.json({ ok: false, error: data.error }, { status: 500 });
    }
  } catch (err) {
    console.error("[careers] Failed to reach GAS webhook:", err);
    return NextResponse.json({ ok: false, error: "Webhook unreachable" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
