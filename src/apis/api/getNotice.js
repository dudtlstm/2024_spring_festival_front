import { API } from "../utils";

// 수정하여 사용하세요!
export const fetchNoticeList = async () => {
  try {
    const response = await API.get("/api/v1/notice");
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("API error: ", error);
    throw error;
  }
};
