import axios from "axios";
import { EndpointsEnum } from "@/types";
import { getDataFromLS, removeDataFromLS, setDataToLS } from "@/utils";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await getDataFromLS("access_token");

    if (token) config.headers.Authorization = "Bearer" + " " + token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    const access_token = response.data.access_token;
    if (access_token) setDataToLS({ access_token });
    return response;
  },
  async (error) => {
    const token = await getDataFromLS("access_token");

    if (!token) return Promise.reject(error);

    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !originalRequest._retry
    ) {
      error.config._isRetry = true;
      try {
        const {
          data: { access_token },
        } = await axios.post(BASE_URL + EndpointsEnum.Refresh, null, {
          withCredentials: true,
        });
        setDataToLS({ token: access_token });

        return api.request(originalRequest);
      } catch (e) {
        removeDataFromLS("access_token");
        return Promise.reject(error);
      }
    }
    throw error;
  }
);

export default api;
