/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Disable Image Optimization as we are exporting statically
    unoptimized: true,
  },
  // Custom page extensions for MDX or other languages could be added here
};

module.exports = nextConfig;