import { NextResponse } from "next/server";

export async function POST() {
  const namespace = process.env.COUNTERAPI_NAMESPACE!;
  const counterName = "kaialan-portfolio-likes";
  const apiKey = process.env.COUNTERAPI_KEY!;

  try {
    const url = `https://api.counterapi.dev/v2/${namespace}/${counterName}/up`;
    const res = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    const errText = await res.text();
    console.log('POST to CounterAPI:', url);
    console.log('Status:', res.status);
    console.log('Body:', errText);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to increment counter", status: res.status, details: errText },
        { status: res.status }
      );
    }

    const data = JSON.parse(errText);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Server error", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
