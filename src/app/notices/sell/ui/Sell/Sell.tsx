import React, { FC } from "react";

import { SellProps } from "./Sell.type";
import styles from "@/app/notices/notices.module.scss";

const Sell: FC<SellProps> = ({ searchParams }) => {
  return (
    <>
      <div className={styles["content-wrapper"]}></div>
    </>
  );
};

export default Sell;
