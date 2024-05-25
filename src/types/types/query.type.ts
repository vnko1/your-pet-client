export type QueryParams = {
  page?: number | string | null;
  query?: string | null;
};

export type NoticeQueryParams = {
  sex?: string | null;
  age?: string | null;
  category: "sell" | "lost-found" | "in-good-hands" | "favorites" | "own";
} & QueryParams;
