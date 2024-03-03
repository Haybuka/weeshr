import { Blog } from './blog';
import axios from './index';

export const _getPost = async (blogId: any): Promise<Blog> => {
  const response = await axios.get(`posts/${blogId}?per_page=1`);
  return response.data;
};
