"use server";
import { EndpointsEnum } from "@/types";

const BASE_URL = process.env.API_URL;

export async function register(data: {
  name: string;
  email: string;
  password: string;
}) {
  const res = await fetch(BASE_URL + EndpointsEnum.Register, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
}
