import { EndpointsEnum } from "@/types";

const BASE_URL = process.env.API_URL;

export async function getSponsors() {
  const res = await fetch(BASE_URL + EndpointsEnum.Sponsors);
  return await res.json();
}
