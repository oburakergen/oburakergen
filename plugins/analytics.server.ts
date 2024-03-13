export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("analytics", {
    track: (event: any, data: any) => {
      console.log(event, data);
    },
  });
});
