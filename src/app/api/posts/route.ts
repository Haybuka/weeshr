import axios from '../index';

export async function getBlogs() {
  // const response = await fetch(
  //   `https://techcrunch.com/wp-json/wp/v2/posts?per_page=10`
  // );
  const response = await axios.get(`posts?per_page=10`);

  return Response.json(response.data);
}
