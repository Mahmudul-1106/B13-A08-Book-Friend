import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  // 1. Check if this is a Server Action request
  const isServerAction = request.headers.get("next-action");
  
  // If it's an action, let it pass so the Action can handle the logic
  if (isServerAction) {
    return NextResponse.next();
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return NextResponse.next();
  } else {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("error", "login_required");
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/myprofile", "/books/:path*"],
};