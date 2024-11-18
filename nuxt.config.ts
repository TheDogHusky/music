// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  typescript: {
    strict: true
  },
  router: {
    linkActiveClass: 'text-secondary',
    linkExactActiveClass: 'text-red'
  },
  plugins: [{ src: '~/plugins/aos.client', mode: 'client' }]
});