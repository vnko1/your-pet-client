import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default api;
