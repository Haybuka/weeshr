/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['sangw.in', 'localhost', 'picsum.photos', 'techcrunch.com'] // <== Domain name
  }
};

export default nextConfig;
