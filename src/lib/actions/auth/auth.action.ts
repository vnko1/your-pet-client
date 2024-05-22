"use server";
import { api } from "@/services";
import { EndpointsEnum, IApiError, RegisterType } from "@/types";
import { AxiosError, AxiosResponse } from "axios";

export async function register(
  data: RegisterType
): Promise<AxiosResponse<{ user: string }> | AxiosError<IApiError>> {
  try {
    return await api.post(EndpointsEnum.Register, data);
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data;
  }
}
