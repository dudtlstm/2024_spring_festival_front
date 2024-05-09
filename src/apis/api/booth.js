import { API } from "../utils";

// 수정하여 사용하세요!
export const booth = async () => {
  try {
    const response = await API.get('', {
    });
    console.log("success!");
    return response;

  } catch (error) {
    console.error("API error: ", error);
  }
};