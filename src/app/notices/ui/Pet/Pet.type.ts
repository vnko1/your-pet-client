import { NoticesTypes } from "@/types";
import { Dispatch, SetStateAction } from "react";

export type PetProps = {
  classNames?: string;
  pet: NoticesTypes;
  userId?: string | null;
  favList: string[];
  setFavList: Dispatch<SetStateAction<string[]>>;
  isFavorite: boolean;
  setIsFavorite: Dispatch<SetStateAction<boolean>>;
};
