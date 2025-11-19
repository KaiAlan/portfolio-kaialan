import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  if (request.headers.get("host") === "meet.kaialan.com" && url.pathname === "/") {
    url.pathname = "/meet"
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/",
}
