import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions } from "./services";

interface SessionData {
  access_token: string | null;
  isLoggedIn: boolean;
}

export async function middleware(req: NextRequest) {
  const currentPath = req.nextUrl.pathname;

  const { isLoggedIn } = await getIronSession<SessionData>(
    cookies(),
    sessionOptions
  );

  if (currentPath.startsWith("/login") && isLoggedIn)
    return NextResponse.rewrite(new URL("/profile", req.url));

  if (currentPath.startsWith("/register") && isLoggedIn)
    return NextResponse.rewrite(new URL("/profile", req.url));

  if (currentPath.startsWith("/profile") && !isLoggedIn)
    return NextResponse.rewrite(new URL("/login", req.url));

  if (currentPath.startsWith("/add") && !isLoggedIn)
    return NextResponse.rewrite(new URL("/login", req.url));

  if (currentPath.startsWith("/notices/favorites") && !isLoggedIn)
    return NextResponse.rewrite(new URL("/login", req.url));

  if (currentPath.startsWith("/notices/own") && !isLoggedIn)
    return NextResponse.rewrite(new URL("/login", req.url));
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/profile",
    "/add/:path*",
    "/notices/favorites",
    "/notices/own",
  ],
};
