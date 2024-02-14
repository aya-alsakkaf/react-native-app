import { getItemAsync, setItemAsync, deleteItemAsync } from "expo-secure-store";

const setToken = async (token) => {
  return await setItemAsync("token", token);
};

const getToken = async () => {
  const token = await getItemAsync("token");
  return token;
};

const deleteToken = async () => {
  return await deleteItemAsync("token");
};

export { setToken, getToken, deleteToken };
