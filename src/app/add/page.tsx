import { redirect } from "next/navigation";
import { LinksEnum } from "@/types";

function AddPetPage() {
  return redirect(LinksEnum.ADD_PET_CATEGORY);
}

export default AddPetPage;
