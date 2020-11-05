const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass')
const config = require('./config');

module.exports = withPlugins([
  [withCSS],
  [withSass, 
    // {
    //   cssModules: true,
    //   cssLoaderOptions: {
    //     localIdentName: '[path]___[local]___[hash:base64:5]',
    //   },
    // }
  ],
], {
  assetPrefix: '',
  env: {
    url: config.url,
  },
});