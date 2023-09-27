import axios from "axios";
// import { REACT_APP_API_URL } from "@env";
import env from "react-dotenv";

const api = axios.create({
  baseURL: `${env.REACT_APP_API_URL}`,
  // withCredentials: false,
  // timeout: 8000,
  // headers: {
  //   Accept: "application/json",
  //   "Content-Type": "application/json",
  // },
});

export { api };
