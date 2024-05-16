import { ModalProps } from "@/components/Modal/Modal.type";
import { Dispatch, SetStateAction } from "react";

type Link = { label: string; href: string };

export interface IMenu extends Omit<ModalProps, "children"> {
  links: Link[];
  pathName: string;
  user: null;
  setActive: Dispatch<SetStateAction<boolean>>;
}
