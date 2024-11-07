/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
}

const nextConfig = {
  env: {
    GITHUB_USERNAME: process.env.GITHUB_USERNAME,
  },
  trailingSlash: true,
  output: 'export',
};

module.exports = nextConfig;