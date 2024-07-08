const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  // endOfLine: 'cr'
  ...styleguide,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
