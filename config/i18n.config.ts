export default defineI18nConfig(() => ({
  legacy: false,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "site-lang",
    redirectOn: "root", // recommended
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
  langDir: "../lang/",
  defaultLocale: "en",
}));
