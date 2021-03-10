// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './css/main.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {

  head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700'
      },
      {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Dancing+Script:400,400i,700'
      })


  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
