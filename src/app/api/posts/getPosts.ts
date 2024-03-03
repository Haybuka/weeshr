import { Blogs } from '../blogs';
import axios from '../index';

export const _getPosts = async (): Promise<Blogs[]> => {
  const response = await axios.get(`posts?per_page=10`);
  return response.data;
};
