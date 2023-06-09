import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.29.151:6001",
  headers: {
    "Content-Type": "application/json",
  },
});
