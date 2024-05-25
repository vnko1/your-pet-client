"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { NOTICES_LIMIT, NoticesTypes } from "@/types";
import { Pagination } from "@/components";
import { getNotices } from "@/lib";

import { Notices } from "../ui";
import styles from "@/app/notices/notices.module.scss";

function SellPage() {
  const searchParams = useSearchParams();
  const [notices, setNotices] = useState<NoticesTypes[]>([]);
  const [totals, setTotals] = useState(0);

  useEffect(() => {
    getNotices({
      category: "sell",
      page: searchParams.get("page"),
      query: searchParams.get("query"),
      age: searchParams.get("age"),
      sex: searchParams.get("sex"),
    })
      .then((res) => {
        setNotices(res.data.data);
        setTotals(res.data.total);
      })
      .catch((error) => console.log(error));
  }, [searchParams]);

  return (
    <>
      <div className={styles["content-wrapper"]}>
        <Notices notices={notices} setNotices={setNotices} />
      </div>
      <Pagination totals={totals} limit={NOTICES_LIMIT} />
    </>
  );
}

export default SellPage;
