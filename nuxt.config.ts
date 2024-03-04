// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";

import { fontConfig, tailwindConfig, i18nConfig } from "./config";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Osman Burak ERGEN | Javascript Developer",
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
    },
  },
  debug: true,
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    [
      "@pinia/nuxt",
      {
        storesDirs: ["./stores/**"],
      },
    ],
    "@vueuse/nuxt",
    "@nuxtjs/eslint-module",
    "@nuxtjs/seo",
    "@nuxtjs/i18n",
    "@nuxt/content",
    "shadcn-nuxt",
    "@nuxtjs/device",
    // "nuxt-mongoose",
  ],
  googleFonts: fontConfig,
  tailwindcss: tailwindConfig,
  i18n: i18nConfig,
  eslint: {
    exclude: ["**/node_modules/**", "/dist/**"],
    lintOnStart: false,
    emitError: true,
  },
  // device: {
  //
  // },
  content: {
    markdown: {
      tags: {
        p: "div",
      },
    },
  },
});
