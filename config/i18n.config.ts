import type { ModuleOptions } from "@nuxtjs/i18n";

const i18nConfig: ModuleOptions = {
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "site_lang",
    redirectOn: "root",
    alwaysRedirect: true,
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
  lazy: true,
  langDir: "lang/",
  defaultLocale: "en",
};

export default i18nConfig;
