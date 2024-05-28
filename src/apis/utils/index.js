import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://mua-dongguk-server.site',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
