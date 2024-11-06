/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '/';
let basePath = '';

if (isGithubActions) {
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
  trailingSlash: true,
  output: 'export',
};

module.exports = nextConfig;