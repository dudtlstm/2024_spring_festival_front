import { API } from "../utils";

export const fetchPromotionBanner = async () => {
  try {
    const response = await API.get("/api/v1/promotion-banner");
    // console.log("프로모션 배너:", response);
    return response.data;
  } catch (error) {
    // console.error("API error: ", error);
    throw error;
  }
};
