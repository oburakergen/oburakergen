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
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss", "nuxt-mongoose", "@nuxtjs/i18n", "shadcn-nuxt"],
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
});
