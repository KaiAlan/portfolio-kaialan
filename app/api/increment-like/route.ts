import { NextResponse } from "next/server";

export async function POST() {
  try {
    const res = await fetch(
      "https://api.counterapi.dev/v2/satyas-team-1613/kaialan-portfolio-likes/up",
      { method: "POST" }
    );

    if (!res.ok) {
      console.error("CounterAPI increment failed", await res.text());
      return NextResponse.json(
        { error: "Failed to increment likes", status: res.status },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in /api/increment-like POST route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
