const withPlugins = require('next-compose-plugins');
const path = require('path');

module.exports = withPlugins([], {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./styles/variables"; @import "./styles/mixins";`,
  },
});
