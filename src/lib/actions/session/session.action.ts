"use server";
import { cookies } from "next/headers";

import { revalidatePath } from "next/cache";
import { getIronSession } from "iron-session";

import { defaultSession, SessionData, sessionOptions, sleep } from "@/services";
import { JSONParser } from "@/utils";

export async function getSession(shouldSleep = true) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
    session.access_token = defaultSession.access_token;
  }
  if (shouldSleep) await sleep(250);
  return session;
}

export async function getParsedSession() {
  const res = await getSession();
  return JSONParser(res);
}

export async function handleAuth(access_token: string) {
  const session = await getSession(true);
  session.access_token = access_token;
  session.isLoggedIn = true;
  await session.save();
}

export async function sessionLogin(access_token: string) {
  await handleAuth(access_token);
  revalidatePath("/", "layout");
}

export async function sessionLogout() {
  const session = await getSession(false);
  session.destroy();
  revalidatePath("/", "layout");
}
