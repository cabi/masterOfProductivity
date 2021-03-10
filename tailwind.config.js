module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['"Source Sans Pro"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
      'handwrite': ['"Dancing Script"', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif']
    },
    extend: {
      backgroundImage: theme => ({
        'bokeh': "url('~@/assets/images/bokeh.jpg')",
        'welcome': "url('~@/assets/images/welcome.jpg')"

      }),
      lineHeight: {
        'extra-tight': '5.5rem'
      }
    },
    variants: {
      extend: {},
    },
    plugins: [
      //require('@tailwindcss/typography'),
      //require('@tailwindcss/forms'),
      //require('@tailwindcss/line-clamp'),
      //require('@tailwindcss/aspect-ratio')
    ],
  },
}
