import type { ModuleOptions } from "@nuxtjs/tailwindcss";

const tailwindConfig: ModuleOptions = {
  editorSupport: true,
  disableHmrHotfix: false,
  quiet: false,
  cssPath: "~/assets/css/tailwind.scss",
  configPath: "tailwind.config",
  exposeConfig: false,
  config: {},
  viewer: true,
};

export default tailwindConfig;
