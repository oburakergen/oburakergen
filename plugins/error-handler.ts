export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.config.errorHandler = (error) => {
    console.log(error);
  };

  // Also possible
  nuxt.hook("vue:error", (error) => {
    console.log(error);
  });
});
