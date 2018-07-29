const pkg = require('./package')

module.exports = {
  mode: 'universal',
  // universal => 有 SSR ; spa => 無 SSR

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name, // 可以改成任意名稱，例如 "WD blog"
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
      // 把 meta tag 包成物件放在這裡
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00aaaa', failedColor: 'yellow', height: '4px', duration: 5000 },
  // 頁面切換時頂端會有一個 progress bar，這個設定可以決定它的顏色 (要用 hex value 比較妥當)，如果不需要此效果可以設 loading: false
  // failedColor: 錯誤時的顏色; height: 高度; duration: 動畫持續時間
  // 注意，duration 非正確載入時間，故 duration 需大於實際載入時間才會有較佳的 UX (載入時間大於 duration 時，會在 99% 的地方卡很久)
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/core-components.js',
    '~/plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.BASE_URL  || 'https://nuxt-blog-62ff7.firebaseio.com',
    credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-62ff7.firebaseio.com',
    fbAPIKey: 'AIzaSyBmTwYvKxYJEXnamjNZsXPj5h4kdUyljp4'
  },
  // 設置環境變量，客戶端及服務端皆可使用
  // 通過 process.env.baseUrl 或 context.baseUrl 來使用這個變數
  // 若環境有設置 BASE_URL 則使用該變數，否則使用 'https://nuxt-blog-62ff7.firebaseio.com'

  router: {
    base: '/app/',
    // 以 app 為根路徑
    extendRoutes(routes, resolve){
      routes.push({
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    },
    // 非預設路徑皆導向首頁
    linkActiveClass: 'active',
    // nuxt-link 點擊時加上 .active
    middleware: 'log'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
}
