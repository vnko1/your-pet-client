import { QueryParams, EndpointsEnum, Article } from "@/types";

const BASE_URL = process.env.API_URL;

export async function getArticles(
  searchParams?: QueryParams
): Promise<{ data: Article[]; total: number }> {
  const res = await fetch(
    BASE_URL + EndpointsEnum.Articles + "?" + new URLSearchParams(searchParams)
  );
  return await res.json();
}
