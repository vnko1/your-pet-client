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
    return response;
  },
  async (error) => {
    const token = getDataFromLS("access_token");

    if (!token) return Promise.reject(error);

    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !originalRequest._retry
    ) {
      error.config._isRetry = true;
      try {
        const res = await axios.post(BASE_URL + EndpointsEnum.Refresh, null, {
          withCredentials: true,
        });
        console.log("🚀 ~ res:", res.data.access_token);
        setDataToLS({ access_token: res.data.access_token });
        return api.request(originalRequest);
      } catch (error) {
        removeDataFromLS("access_token");
        return Promise.reject(error);
      }
    }

    throw error;
  }
);

export default api;
