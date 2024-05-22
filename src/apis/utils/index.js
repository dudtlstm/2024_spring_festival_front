import axios from 'axios';

export const API = axios.create({
  // baseURL 확정시 변경
  baseURL: "https://mua-dongguk-server.site",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
