defineNuxtRouteMiddleware((context) => {
  const { width: windowWidth } = useWindowSize();

  console.log("windowWidth", windowWidth.value);

  if (windowWidth.value > 768) setPageLayout("default");
  else setPageLayout("mobile");
});
