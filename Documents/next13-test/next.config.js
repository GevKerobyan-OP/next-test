/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [375, 1440],
    dangerouslyAllowSVG: true,
    domains: ["flagcdn.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
