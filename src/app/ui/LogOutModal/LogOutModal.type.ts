import { Dispatch, SetStateAction } from "react";

export type LogOutModalProps = {
  classNames?: string;
  active: boolean;
  visible: boolean;
  close: () => void;
  setVisible: Dispatch<SetStateAction<boolean>>;
};
