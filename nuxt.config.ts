// https://nuxt.com/docs/api/configuration/nuxt-config
import {tailwind} from "~/config/tailwind";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    '@nuxtjs/sitemap'
  ]
})
