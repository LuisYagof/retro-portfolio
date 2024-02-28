// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 5555
  },
  css: ['~/assets/styles/main.css', '~/assets/styles/fonts.css', '~/assets/styles/reset.css', '~/assets/styles/colors.css'],
  plugins: ['~/plugins/dragDrop.ts'],
  modules: ['@nuxtjs/color-mode']
})
