import axios from "axios";

export const API = axios.create({
  // baseURL 확정시 변경
  baseURL: "http://",
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});