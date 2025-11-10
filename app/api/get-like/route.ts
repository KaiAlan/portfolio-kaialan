import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.counterapi.dev/v2/satyas-team-1613/kaialan-portfolio-likes",
      { cache: "no-store" } // no caching for fresh data
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch likes", status: res.status },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
