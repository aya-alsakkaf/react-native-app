import axios from "axios";

const BASEURL = "http://localhost:8001";
const instance = axios.create({
  baseURL: BASEURL,
});

export { instance, BASEURL };
