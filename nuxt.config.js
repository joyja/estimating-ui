export default {
  env: {
    estimatingServerSecure: process.env.ESTIMATING_SERVER_SECURE || false,
    estimatingServerHost: process.env.ESTIMATING_SERVER_HOST,
    estimatingServerPort: process.env.ESTIMATING_SERVER_PORT || 4000,
    estimatingServerUrl: process.env.ESTIMATING_SERVER_URL,
    estimatingClientSecure: process.env.ESTIMATING_CLIENT_SECURE || false,
    estimatingClientHost: process.env.ESTIMATING_CLIENT_HOST,
    estimatingClientPort: process.env.ESTIMATING_CLIENT_PORT,
    estimatingClientUrl: process.env.ESTIMATING_CLIENT_URL,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'estimating-ui',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo'
  ],

  // Apollo module configuration
  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-config.js',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: function (config, {isDev, isClient}) {
      config.node = {
          fs: "empty"
      };
    }
  }
}
