// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "assets": "/<rootDir>/assets",
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  components: [
    { path: '~/components/header' },
    { path: '~/components/categories' },
    { path: '~/components/food' },
    '~/components'
  ],
  css: ["@/assets/main.scss"],
  devtools: { enabled: true },
  image: {
    dir: 'assets/img'
  },
  modules: ['@pinia/nuxt', '@nuxt/image'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
