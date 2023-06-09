// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    viewer: false,
  },
})
