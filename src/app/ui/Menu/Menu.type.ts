import { ModalProps } from "@/components/Modals/Modal/Modal.type";

type Link = { label: string; href: string };

export interface IMenu extends Omit<ModalProps, "children"> {
  links: Link[];
  pathName: string;
  user: null;
}
