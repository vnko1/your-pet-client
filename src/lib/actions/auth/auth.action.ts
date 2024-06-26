import { AxiosError } from "axios";
import { privateApi, publicApi } from "@/services";
import { EndpointsEnum, IApiError, LoginType, RegisterType } from "@/types";
import { sessionLogout } from "../session/session.action";

export async function register(
  data: RegisterType
): Promise<void | AxiosError<IApiError>> {
  try {
    await publicApi.post(EndpointsEnum.Register, data);
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data;
    throw error;
  }
}

export async function login(data: LoginType) {
  try {
    return await privateApi.post(EndpointsEnum.Login, data);
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data;
    throw error;
  }
}

export async function logout() {
  try {
    await privateApi.post(EndpointsEnum.Logout);
    await sessionLogout();
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data;
    throw error;
  }
}
