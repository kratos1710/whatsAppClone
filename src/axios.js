import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5274",
});
export default instance;
