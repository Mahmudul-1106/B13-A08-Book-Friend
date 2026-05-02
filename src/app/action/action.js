"use server"; // MUST be "use server" to use next/headers

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function checkActiveSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  
  // Return true if session exists, false otherwise
  return !!session; 
}