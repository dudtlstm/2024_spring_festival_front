import { API } from "../../apis/utils";

export const fetchArtists = async (day) => {
  try {
    const response = await API.get(`api/v1/artist?day=${day}`);
    // console.log("lineup success!", response.data);
    return response.data;

  } catch (error) {
    // console.error("API error: ", error);

    throw error;
  }
};

export const fetchPlaylists = async (artist_id)=>{
  try {
    const response = await API.get(`api/v1/artist/${artist_id}`);
    // console.log("playlists success!", response.data);
    return response.data;

  } catch (error) {
    // console.error("API error: ", error);

    throw error;
  }
  
}