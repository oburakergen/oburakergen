export default {
  legacy: false,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "site-lang",
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
