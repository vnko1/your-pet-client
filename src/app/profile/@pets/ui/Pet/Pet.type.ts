import { Dispatch, SetStateAction } from "react";
import { PetTypes } from "@/types";

export type PetProps = PetTypes & {
  setPets: Dispatch<SetStateAction<Array<PetTypes>>>;
};
