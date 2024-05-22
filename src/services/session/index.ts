import { SessionOptions } from "iron-session";

export interface SessionData {
  access_token: string | null;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  access_token: null,
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_PASS as string,
  cookieName: "session_token",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
