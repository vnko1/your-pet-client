"use server";
import { api } from "@/services";
import { EndpointsEnum, IApiError, LoginType, RegisterType } from "@/types";
import { AxiosError, AxiosResponse } from "axios";

export async function register(
  data: RegisterType
): Promise<void | AxiosError<IApiError>> {
  try {
    await api.post(EndpointsEnum.Register, data);
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data;
  }
}

export async function login(
  data: LoginType
): Promise<AxiosResponse | AxiosError<IApiError> | undefined> {
  try {
    await api.post(EndpointsEnum.Login, data);
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data;
  }
}
