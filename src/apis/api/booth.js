import { API } from '../utils';

export const booth = async date => {
  try {
    const response = await API.get(`api/v1/booth?date=${date}`);
    return response.data;
  } catch (error) {
    // console.error('API error: ', error);
    return [];
  }
};
