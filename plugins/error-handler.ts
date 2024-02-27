export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.config.errorHandler = (error, instance, info) => {
    console.log(error);
  };

  // Also possible
  nuxt.hook("vue:error", (error, instance, info) => {
    console.log(error);
  });
});
