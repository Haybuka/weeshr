import axios from 'axios';

export const baseURL = 'https://techcrunch.com/wp-json/wp/v2/';

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
