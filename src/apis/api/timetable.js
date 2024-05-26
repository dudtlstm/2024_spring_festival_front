import { API } from "../../apis/utils";

export const fetchAllPerformance = async (date, location) => {
  try {
    const response = await API.get(`api/v1/timetable?date=${date}&location=${location}`);
    // console.log("timetable success!", response.data);
    return response.data;

  } catch (error) {
    // console.error("API error: ", error);

    throw error;
  }
};