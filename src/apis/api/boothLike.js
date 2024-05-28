import { API } from "../../apis/utils";
import { getCookie, setCookie } from "../../utils/cookies";

export const fetchPostLike = async (id, date) => {
  try {    
    const response = await API.post(`api/v1/booth/${id}/likes?date=${date}`);
    if(response){
      const boothId = id; // react-cookie 라이브러리 활용-쿠키 저장
      const secretKey = response.data.key; // react-cookie 라이브러리 활용-쿠키 저장

      setCookie(boothId, secretKey,{path: '/'}); // string 을 끼워넣은 방법으로 옳지 않음 -> 수정 필요
    }
    // console.log("like post, ", response.data);

    return response.data;
  } catch (error) {
    // console.error("API error: ", error);
    throw error;
  }
};

export const fetchDeleteLike = async (id, date) => {
  try {
    const boothId = id;
    const secretKey = getCookie(boothId); // 쿠키에서 해당 id에 대한 값 가져오기

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${secretKey}`, // secretKey를 Authorization 헤더에 추가
      'Booth-ID': boothId, // boothId를 별도의 헤더에 추가
    };

    const response = await API.delete(`api/v1/booth/${id}/likes?date=${date}`, {
      headers: headers,
      withCredentials: true,
    });

    // const headers = {
    //   'Content-Type': 'application/json',
    // };
    // headers[boothId] = secretKey; // 헤더에 동적으로 쿠키 값 추가

    // const response = await API.delete(`api/v1/booth/${id}/likes?date=${date}`, {
    //   headers: headers,
    //   withCredentials: true,
    // });

    // 아래는 사파리 CORS 문제 해결이 안 되어, 크롬에서만 동작함
  // try {
  //   const response = await API.delete(`api/v1/booth/${id}/likes?date=${date}`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     withCredentials: true, // 자동으로 쿠키 포함
  //   });

    // console.log("like delete, ", response.data);
    return response.data;

  } catch (error) {
    // console.error("API error: ", error);
    throw error;
  }
};