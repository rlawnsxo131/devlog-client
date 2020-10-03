const path = require('path');

require('dotenv').config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV === 'development'
      ? '.env.development'
      : '.env.production',
  ),
});

module.exports = {
  target: process.env.BUILD_TARGET,
  webpack: (config) => {
    const prod = process.env.NODE_ENV === 'production';
    return {
      ...config,
      devtool: prod ? 'hidden-source-map' : 'eval',
    };
  },
};
