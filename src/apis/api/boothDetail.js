import { API } from '../utils';

export const boothDetail = async (id, date) => {
  try {
    const response = await API.get(`api/v1/booth/${id}`);
    return response.data;
  } catch (error) {
    // console.error('API error: ', error);
    return [];
  }
};
