import { API } from "../utils";

export const fetchPromotionBanner = async () => {
  try {
    const response = await API.get("/api/v1/promotion-banner");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("API error: ", error);
    throw error;
  }
};
