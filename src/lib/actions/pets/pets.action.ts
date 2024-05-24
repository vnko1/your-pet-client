import { privateApi } from "@/services";
import { EndpointsEnum } from "@/types";

export async function addPet(data: FormData) {
  return await privateApi.post(EndpointsEnum.Pets, data);
}

export async function getPets() {
  return await privateApi(EndpointsEnum.Pets);
}

export async function deletePet(id: string) {
  return await privateApi.delete(EndpointsEnum.Pets + "/" + id);
}
