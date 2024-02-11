import { instance } from ".";

const login = async (userInfo) => {
  const { data } = await instance.post("mini-project/api/auth/login", userInfo);
  return data;
};

const register = async (userInfo) => {
  const { data } = await instance.post(
    "mini-project/api/auth/register",
    userInfo
  );
  return data;
};
export { login };
