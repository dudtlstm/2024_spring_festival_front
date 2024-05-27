import { API } from "../../apis/utils";
import { getCookie, setCookie } from "../../utils/cookies";

export const fetchPostLike = async (id, date) => {
  try {
    const cookieName = id; // react-cookie 라이브러리 활용-쿠키 저장

    const response = await API.post(`api/v1/booth/${id}/likes?date=${date}`);
    if(response){
      const responseValue = response.data.key; // string 을 끼워넣은 방법으로 옳지 않음 -> 수정 필요
      setCookie(cookieName, responseValue,{path: '/'}); // string 을 끼워넣은 방법으로 옳지 않음 -> 수정 필요
    }
    console.log("like post, ", response.data);

    return response.data;
  } catch (error) {
    // console.error("API error: ", error);
    throw error;
  }
};

export const fetchDeleteLike = async (id, date) => {
  try {
    const response = await API.delete(`api/v1/booth/${id}/likes?date=${date}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true, // 자동으로 쿠키 포함
    });

    console.log("like delete, ", response.data);
    return response.data;

  } catch (error) {
    // console.error("API error: ", error);
    throw error;
  }
};