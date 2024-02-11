import axios from "axios";

const BASEURL =
  "https://react-native-mini-project-items.eapi.joincoded.com/";
const instance = axios.create({
  baseURL: BASEURL,
});

export { instance, BASEURL };
