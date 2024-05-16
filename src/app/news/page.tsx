import React from "react";

import { QueryParams } from "@/types";
import { Pagination } from "@/components";
import { getArticles } from "@/lib";

import { Articles, Search } from "./ui";
import styles from "./news.module.scss";

async function Page({ searchParams }: { searchParams?: QueryParams }) {
  const { total, data } = await getArticles(searchParams);

  return (
    <main>
      <section className={`${styles["news"]} section`}>
        <div className={`${styles["news__wrapper"]} container`}>
          <h1 className="title">News</h1>
          <Search />
          <Articles articles={data} />
          <Pagination totals={total} limit={6} />
        </div>
      </section>
    </main>
  );
}

export default Page;