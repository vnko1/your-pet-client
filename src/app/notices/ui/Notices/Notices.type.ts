import { Dispatch, SetStateAction } from "react";
import { NoticesTypes } from "@/types";

export type NoticesProps = {
  notices: NoticesTypes[];
  setNotices: Dispatch<SetStateAction<NoticesTypes[]>>;
  refetch?: () => void;
};
