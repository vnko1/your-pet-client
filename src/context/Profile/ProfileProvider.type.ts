import { Dispatch, ReactNode, SetStateAction } from "react";
import { User } from "@/types";

export type ProfileContextType = {
  user: null | User;
  setUser: Dispatch<SetStateAction<null | User>>;
};

export type ProfileProviderProps = { children: ReactNode };
