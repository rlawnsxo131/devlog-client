const path = require('path');

require('dotenv').config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV === 'development'
      ? '.env.development'
      : '.env.production',
  ),
});
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  target: process.env.BUILD_TARGET,
  assetPrefix: prod ? process.env.ASSET_PREFIX : '',
  webpack: (config) => {
    return {
      ...config,
      devtool: prod ? 'hidden-source-map' : 'eval',
    };
  },
};
