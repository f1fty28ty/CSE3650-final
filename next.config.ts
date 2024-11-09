/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,  // Ensures paths end with a slash for GitHub Pages compatibility
  output: 'export',     
  // for static export comment out any 'output:'
};

module.exports = nextConfig;