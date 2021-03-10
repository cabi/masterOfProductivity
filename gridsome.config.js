// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Master of Productivity',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer
        ]
      }
    }
  }
}
