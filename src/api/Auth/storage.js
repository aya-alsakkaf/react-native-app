import { getItemAsync, setItemAsync, deleteItemAsync } from "expo-secure-store";

const setToken = async (token) => {
  return await getItemAsync("token", token);
};

const getToken = async () => {
  return await setItemAsync("token");
};

const deleteToken = async () => {
  return await deleteItemAsync("token");
};

export { setToken, getToken, deleteToken };
