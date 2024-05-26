import { API } from "../utils";

export const fetchNoticeList = async () => {
  try {
    const response = await API.get("/api/v1/notice");
    // console.log(response.data);
    return response;
  } catch (error) {
    // console.error("API error: ", error);
    throw error;
  }
};
