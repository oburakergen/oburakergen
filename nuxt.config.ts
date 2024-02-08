// https://nuxt.com/docs/api/configuration/nuxt-config

import { fontConfig, tailwindConfig, i18nConfig } from "./config";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Osman Burak ERGEN | Javascript Developer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@vueuse/nuxt",
    "@nuxtjs/eslint-module",
    "@nuxtjs/seo",
    "@nuxtjs/i18n",
    // "@nuxtjs/stylelint-module",
  ],
  googleFonts: fontConfig,
  tailwindcss: tailwindConfig,
  i18n: i18nConfig,
});
