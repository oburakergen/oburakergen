import { tailwindConfig, i18nConfig } from "./configs";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt TypeScript Starter",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: true },
  debug: true,
  typescript: {
    typeCheck: true,
    strict: true,
  },
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "nuxt-mongoose",
    "@nuxtjs/i18n",
    "shadcn-nuxt",
    "@nuxt/image",
  ],
  eslint: {
    exclude: ["**/node_modules/**", "/dist/**"],
    lintOnStart: false,
    emitError: true,
  },
  tailwindcss: tailwindConfig,
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: "server/models",
  },
  i18n: i18nConfig,
  image: {
    presets: {
      avatar: {
        preset: "quality",
        modifiers: {
          format: "webp",
          quality: 80,
        },
      },
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
});
