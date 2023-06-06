// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ['../layer'],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
  }
})
