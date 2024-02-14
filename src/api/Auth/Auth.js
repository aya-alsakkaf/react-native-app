import { instance } from "..";
import { setToken } from "./storage";

const login = async (userInfo) => {
  const { data } = await instance.post("/login", userInfo);
  const token = data.token;
  if (token) {
    setToken(token);
  }
  return data;
};

const register = async (userInfo) => {
  const { data } = await instance.post("/register", userInfo);
  const token = data.token;
  if (token) {
    setToken(token);
  }
  return data;
};

const me = async () => {
  const { data } = await instance.get("/me");
  return data;
};

export { login, register, me };
