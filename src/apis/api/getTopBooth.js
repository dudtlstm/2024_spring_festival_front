import { API } from "../utils";

export const getTopBooth = async (date) => {
  try {
    const response = await API.get(`/api/v1/booth/top3?date=${date}`);
    // console.log(response);
    return response.data;
  } catch (error) {
    // console.error("API error: ", error);
    throw error;
  }
};
