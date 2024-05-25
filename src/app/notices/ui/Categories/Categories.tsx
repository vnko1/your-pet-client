"use client";
import React, { ChangeEvent, FC } from "react";
import { usePathname, useRouter } from "next/navigation";

import { LinksEnum } from "@/types";
import { RadioField } from "@/components";
import { useProfileContext } from "@/context";

import styles from "./Categories.module.scss";

const notices = [
  {
    label: "sell",
    name: "category",
    value: LinksEnum.NOTICES_SELL,
  },
  {
    label: "lost/found",
    name: "category",
    value: LinksEnum.NOTICES_LOST_FOUND,
  },
  {
    label: "in good hands",
    name: "category",
    value: LinksEnum.NOTICES_IN_GOOD_HANDS,
  },
  {
    label: "favorite ads",
    name: "category",
    value: LinksEnum.NOTICES_FAVORITE,
  },
  {
    label: "my ads",
    name: "category",
    value: LinksEnum.NOTICES_OWN,
  },
];

const Categories: FC = () => {
  const path = usePathname();
  const router = useRouter();
  const { user } = useProfileContext();

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    router.push(event.target.value);
  };

  const endSliceValue = user ? notices.length : 3;
  return (
    <ul className={styles["categories"]}>
      {notices.slice(0, endSliceValue).map((notice) => (
        <li key={notice.value}>
          <RadioField
            {...notice}
            checked={path === notice.value}
            onChange={onHandleChange}
          />
        </li>
      ))}
    </ul>
  );
};

export default Categories;
