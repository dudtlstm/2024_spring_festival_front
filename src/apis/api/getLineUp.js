import { API } from "../utils";

export const fetchArtistImages = async (day) => {
  try {
    const response = await API.get(`/api/v1/artist?day=${day}`);
    // console.log(`${day}response: `, response.data);
    const imageUrls = response.data.map((item) => item.images[0]);
    return imageUrls;
  } catch (error) {
    // console.error("API error: ", error);
    throw error;
  }
};
