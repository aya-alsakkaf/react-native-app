import axios from "axios";
import { getToken } from "../api/Auth/storage";

const BASEURL = "http://localhost:8001";
const instance = axios.create({
  baseURL: BASEURL,
});

instance.interceptors.request.use(async (config) => {
  const token = await getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
export { instance, BASEURL };
