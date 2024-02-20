export default defineNuxtLink({
  componentName: "NavigationLink",
  activeClass: "active",
  trailingSlash: "remove",
  prefetchedClass: "prefetched",
  externalRelAttribute: "me",
});
