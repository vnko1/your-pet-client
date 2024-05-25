"use client";
import React, { FC } from "react";

import { useProfileContext } from "@/context";

import { Notice } from "..";

import { NoticesProps } from "./Notices.type";
import styles from "./Notices.module.scss";

const Notices: FC<NoticesProps> = ({ notices, setNotices }) => {
  const { user } = useProfileContext();

  return (
    <ul className={styles["notices"]}>
      {notices.map((notice) => (
        <li key={notice._id.toString()}>
          <Notice {...notice} userId={user?._id} setNotices={setNotices} />
        </li>
      ))}
    </ul>
  );
};

export default Notices;
