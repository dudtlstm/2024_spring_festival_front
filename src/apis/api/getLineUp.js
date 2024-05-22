import { API } from "../utils";

export const fetchArtistImages = async (day) => {
  try {
    const response = await API.get(`/api/v1/artist?day=${day}`);
    console.log("response: ", response);
    return response.data.results.map((result) => result.image);
  } catch (error) {
    console.error("API error: ", error);
    throw error;
  }
};
