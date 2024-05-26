import { API } from "../../apis/utils";

export const fetchRealtimeEvent = async () => {
  try {
    const response = await API.get("api/v1/timetable/now");
    // console.log("realtime event success!", response.data);
    return response.data;

  } catch (error) {
    // console.error("API error: ", error);

    throw error;
  }
};