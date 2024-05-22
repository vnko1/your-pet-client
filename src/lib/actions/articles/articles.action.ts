"use server";
import { AxiosResponse } from "axios";
import { api } from "@/services";
import { QueryParams, EndpointsEnum, Article } from "@/types";

export async function getArticles(
  searchParams?: QueryParams
): Promise<AxiosResponse<{ data: Article[]; total: number }>> {
  return await api.get(EndpointsEnum.Articles, { params: searchParams });
}
