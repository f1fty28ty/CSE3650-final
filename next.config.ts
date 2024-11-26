/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    try {
      console.log(config);
    } catch (error) {
      console.error("Error serializing Webpack config:", error);
    }
    return config;
  },
};

export default nextConfig;