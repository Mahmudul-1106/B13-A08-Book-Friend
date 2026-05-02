"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function checkActiveSession() {
  try {
    // 1. Await headers properly
    const allHeaders = await headers();
    
    // 2. Attempt to get the session
    const session = await auth.api.getSession({
      headers: allHeaders,
    });
    
    // 3. Return a plain boolean. NEVER return a full session object 
    // to a client component if it might contain complex database types.
    return !!session; 
  } catch (error) {
    // 4. If someone is logged out, getSession might throw or fail.
    // We catch that here and return false safely.
    console.log("Session check: No active session found.");
    return false;
  }
}