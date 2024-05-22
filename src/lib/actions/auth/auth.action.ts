import { AxiosError, AxiosResponse } from "axios";
import { privateApi, publicApi } from "@/services";
import { EndpointsEnum, IApiError, LoginType, RegisterType } from "@/types";

export async function register(
  data: RegisterType
): Promise<void | AxiosError<IApiError>> {
  try {
    await publicApi.post(EndpointsEnum.Register, data);
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data;
  }
}

export async function login(
  data: LoginType
): Promise<
  AxiosResponse<{ access_token: string }> | AxiosError<IApiError> | undefined
> {
  try {
    const res = await privateApi.post(EndpointsEnum.Login, data);
    return res;
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data;
  }
}
