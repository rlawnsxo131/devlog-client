const path = require('path');
const { config } = require('dotenv');

config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV === 'development'
      ? '.env.development'
      : '.env.production',
  ),
});

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  env: {
    PUBLIC_URL: process.env.PUBLIC_URL,
    PUBLIC_IMAGE_URL: process.env.PUBLIC_IMAGE_URL,
    DEVLOG_SERVICE_URL: process.env.DEVLOG_SERVICE_URL
  },
  target: process.env.BUILD_TARGET,
  assetPrefix: prod ? process.env.PUBLIC_URL : '',
  compress: true,
  webpack: (config) => {
    return {
      ...config,
      devtool: prod ? 'hidden-source-map' : 'eval',
    };
  },
};
