export default defineNuxtLink({
  componentName: "NavigationLink",
  activeClass: "!text-secondary-foreground",
  trailingSlash: "remove",
  prefetchedClass: "prefetched",
  externalRelAttribute: "me",
});
