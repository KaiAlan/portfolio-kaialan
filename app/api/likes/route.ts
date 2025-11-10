import { NextResponse } from "next/server";

export async function GET() {
  const namespace = process.env.COUNTERAPI_NAMESPACE!;
  const counterName = "kaialan-portfolio-likes";
  const apiKey = process.env.COUNTERAPI_KEY!;

  console.log('likes API hit');
  console.log('Namespace:', namespace);
  console.log('Counter Name:', counterName);
  console.log('API Key:', !!apiKey);

  try {
    console.log("likes API route hit")
    const res = await fetch(`https://api.counterapi.dev/v2/${namespace}/${counterName}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      cache: "no-store",
    });
    console.log('CounterAPI response status:', res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("CounterAPI fetch failed with status", res.status, "and message:", errorText);
      return NextResponse.json({ error: "Failed to fetch counter", details: errorText, status: res.status }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Server fetch error:", error);
    return NextResponse.json({ error: "Server fetch error", details: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}