import React from "react";

import { ConstantsEnum, NOTICES_LIMIT, NoticeQueryParams } from "@/types";

import { Sell } from "./ui";

type PageProps = { searchParams: NoticeQueryParams };

function SellPage({ searchParams }: PageProps) {
  //   const query: NoticeQueryParams = { ...searchParams, category: "sell" };
  //   const totals = await getNoticesPages(query);
  //   const data = await getNotices(query);

  return <Sell searchParams={searchParams} />;
}

export default SellPage;
