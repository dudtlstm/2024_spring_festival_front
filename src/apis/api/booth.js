import { API } from '../utils';

export const booth = async () => {
  try {
    const response = await API.get('api/v1/booth');
    return response.data;
  } catch (error) {
    // console.error('API error: ', error);
    return [];
  }
};
