import { API } from "../utils";

export const getTopBooth = async (dates = null) => {
  try {
    let response;
    if (dates) {
      const datePromises = dates.map((date) =>
        API.get(`/api/v1/booth/top3?date=${date}`)
      );
      const dateResponses = await Promise.all(datePromises);
      response = dateResponses.flatMap((res) => res.data);
    } else {
      response = await API.get(`/api/v1/booth/top3`);
      response = response.data;
    }
    // console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
