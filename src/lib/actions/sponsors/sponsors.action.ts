import { publicApi } from "@/services";
import { EndpointsEnum } from "@/types";

export async function getSponsors() {
  return await publicApi(EndpointsEnum.Sponsors);
}
