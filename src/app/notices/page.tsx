import { redirect } from "next/navigation";
import { LinksEnum } from "@/types";

function Page() {
  return redirect(LinksEnum.NOTICES_SELL);
}

export default Page;
