import { privateApi } from "@/services";
import { EndpointsEnum } from "@/types";

export async function addPet(data: FormData) {
  return await privateApi.post(EndpointsEnum.Pets, data);
}

export async function addNotice(data: FormData) {
  return await privateApi.post(EndpointsEnum.Notices, data);
}
