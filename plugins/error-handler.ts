// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineNuxtPlugin((nuxt) => {
    nuxt.vueApp.config.errorHandler = (error, instance, info) => {
        // handle error, e.g. report to a service
    };

    // Also possible
    nuxt.hook("vue:error", (error, instance, info) => {
        // handle error, e.g. report to a service
    });
});
