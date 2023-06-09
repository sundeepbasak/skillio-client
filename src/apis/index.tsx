import { api } from "../axios/index";

export const getToken = () => {
  return localStorage.getItem("token");
};
export const getCourseData = async () => {
  const res = await api.get("/course", {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
  return res.data;
};
