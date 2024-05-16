import { Dispatch, ReactNode, SetStateAction } from "react";
import { UseSwipeProps } from "@/hooks/useSwipe/useSwipe.type";

export type ModalProps = {
  active: boolean;
  visible: boolean;
  children: ReactNode;
  backdropClassNames?: string;
  classNames?: string;
  disableScroll?: boolean;
  transitionClassNames?: string;
  swipe?: "left" | "right";
  close: () => void;
  setVisible: Dispatch<SetStateAction<boolean>>;
} & Partial<UseSwipeProps>;
