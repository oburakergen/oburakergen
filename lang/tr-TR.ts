export default defineI18nLocale(async (locale: string) => {
  // const blog = await $fetch(`/api/blog?lang=${locale}`).then((res: any) =>
  //   res.json(),
  // );
  return {
    welcome: "Hoşgeldiniz",
    // ...blog,
  };
});
