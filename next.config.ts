/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    GITHUB_USERNAME: process.env.GITHUB_USERNAME,
  },
  trailingSlash: true,  // Ensures paths end with a slash for GitHub Pages compatibility
  output: 'export',     // Exports the app as static HTML for GitHub Pages
};

module.exports = nextConfig;