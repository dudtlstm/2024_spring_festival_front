import { API } from "../utils";

// 수정하여 사용하세요!
export const getPromotions = async () => {
  try {
    const response = await API.get('/api/v1/promotion');
    // console.log("success!", response.data);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    // console.error("API error: ", error);
    throw error;
  }
};