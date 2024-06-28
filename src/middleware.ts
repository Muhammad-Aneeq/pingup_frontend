import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (
    !request.nextUrl.pathname.startsWith("/signup") &&
    request.nextUrl.pathname === "/"
  ) {
    return NextResponse.redirect(new URL("/signup", request.url));
  }
}
