/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 10,
      static: 15,
    },
  },
};

export default nextConfig;
