import { instance } from "..";

const login = async (userInfo) => {
  const { data } = await instance.post("/login", userInfo);
  return data;
};

const register = async (userInfo) => {
  const { data } = await instance.post("/register", userInfo);
  return data;
};
export { login };
