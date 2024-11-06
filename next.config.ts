/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

// Define default values
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Extract the repository name from the GitHub repository environment variable
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  env: {
    GITHUB_USERNAME: process.env.GITHUB_USERNAME,
  },
  assetPrefix,
  basePath,
  trailingSlash: true, // Necessary for GitHub Pages
};

module.exports = nextConfig;