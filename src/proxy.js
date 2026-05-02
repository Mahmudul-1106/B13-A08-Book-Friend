import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return NextResponse.next();
  } else {
    // Add a query parameter like ?error=login_required
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("error", "login_required");
    
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/myprofile", "/books/:path*"],
};