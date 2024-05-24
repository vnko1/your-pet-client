import { privateApi } from "@/services";
import { EndpointsEnum } from "@/types";

export async function addNotice(data: FormData) {
  return await privateApi.post(EndpointsEnum.Notices, data);
}
