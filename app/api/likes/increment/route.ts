import { NextResponse } from "next/server";

export async function POST() {
  const namespace = process.env.COUNTERAPI_NAMESPACE!;
  const counterName = "kaialan-portfolio-likes";
  const apiKey = process.env.COUNTERAPI_KEY!;

  try {
    console.log("increment API route hit")
    const res = await fetch(`https://api.counterapi.dev/v2/${namespace}/${counterName}/up`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to increment counter" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Server increment error" }, { status: 500 });
  }
}
