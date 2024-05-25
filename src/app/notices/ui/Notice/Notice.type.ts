import { NoticesTypes } from "@/types";
import { Dispatch, SetStateAction } from "react";

export type NoticeProps = {
  classNames?: string;
  userId?: string | null;
  refetch?: () => void;
  setNotices: Dispatch<SetStateAction<NoticesTypes[]>>;
} & NoticesTypes;
