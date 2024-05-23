import { Dispatch, ReactNode, SetStateAction } from "react";
import { User } from "@/types";

export type ProfileContextType = {
  user: null | User;
  setUser: Dispatch<SetStateAction<null | User>>;
  handleLogout: () => void;
};

export type ProfileProviderProps = { children: ReactNode };
