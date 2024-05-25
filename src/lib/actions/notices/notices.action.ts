import { privateApi } from "@/services";
import { EndpointsEnum, NoticeQueryParams } from "@/types";

export async function addNotice(data: FormData) {
  return await privateApi.post(EndpointsEnum.Notices, data);
}

export async function getNotices(searchParams: NoticeQueryParams) {
  return await privateApi(EndpointsEnum.Notices, { params: searchParams });
}

export async function addToFavorite(id: string) {
  return await privateApi.post(EndpointsEnum.Favorites + "/" + id);
}

export async function removeFromFavorite(id: string) {
  return await privateApi.delete(EndpointsEnum.Favorites + "/" + id);
}

export async function deleteNotice(id: string) {
  return await privateApi.delete(EndpointsEnum.Notice + "/" + id);
}

export async function getNotice(id: string) {
  return privateApi(EndpointsEnum.Notice + "/" + id);
}

export async function getOwnNotices(searchParams: Partial<NoticeQueryParams>) {
  return await privateApi(EndpointsEnum.Owner, { params: searchParams });
}

export async function getFavoriteNotices(
  searchParams: Partial<NoticeQueryParams>
) {
  return await privateApi(EndpointsEnum.Favorites, { params: searchParams });
}
