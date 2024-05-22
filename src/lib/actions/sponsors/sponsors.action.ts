import { api } from "@/services";
import { EndpointsEnum } from "@/types";

export async function getSponsors() {
  return await api(EndpointsEnum.Sponsors);
}
