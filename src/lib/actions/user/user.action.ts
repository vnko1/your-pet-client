import { privateApi } from "@/services";
import { EndpointsEnum } from "@/types";

export async function updateUser(data: FormData) {
  return await privateApi.put(EndpointsEnum.Profile, data);
}
