"use client";
import React, { FC, useState } from "react";

import { useProfileContext } from "@/context";
import { NoticesTypes } from "@/types";

import { Notice } from "..";

import styles from "./Notices.module.scss";

const Notices: FC = () => {
  const { user } = useProfileContext();
  const [notices] = useState<Array<NoticesTypes>>([]);
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
