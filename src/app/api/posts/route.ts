import axios from '../index';
import { NextResponse } from 'next/server';
import { jsonc } from 'jsonc';

export async function GET() {
  // const response = await fetch(
  //   `https://techcrunch.com/wp-json/wp/v2/posts?per_page=10`
  // );
  const response = await axios.get(`posts?per_page=10`);

  return Response.json(response.data);
}
