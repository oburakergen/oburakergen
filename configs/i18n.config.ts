import type { ModuleOptions } from "@nuxtjs/i18n";

const i18nConfig: ModuleOptions = {
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "locale",
    redirectOn: "root",
  },
  locales: [
    {
      code: "en",
      iso: "en-US",
      file: "en-US.ts",
    },
    {
      code: "tr",
      iso: "tr-TR",
      file: "tr-TR.ts",
    },
  ],
  lazy: false,
  langDir: "langs/",
  strategy: "prefix_and_default",
  defaultLocale: "en",
};

export default i18nConfig;
