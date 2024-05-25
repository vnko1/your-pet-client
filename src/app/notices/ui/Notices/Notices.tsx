"use client";
import React, { FC } from "react";

import { useProfileContext } from "@/context";

import { Notice } from "..";

import styles from "./Notices.module.scss";
import { NoticesProps } from "./Notices.type";

const Notices: FC<NoticesProps> = ({ notices }) => {
  const { user } = useProfileContext();

  return (
    <ul className={styles["notices"]}>
      {notices.map((notice) => (
        <li key={notice._id.toString()}>
          <Notice {...notice} userId={user?._id} />
        </li>
      ))}
    </ul>
  );
};

export default Notices;
