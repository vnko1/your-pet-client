import { NoticesTypes } from "@/types";
import { Dispatch, SetStateAction } from "react";

export type NoticeProps = {
  classNames?: string;
  userId?: string | null;
  setNotices: Dispatch<SetStateAction<NoticesTypes[]>>;
} & NoticesTypes;
