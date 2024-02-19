export default function useResponsive() {
  const { width: windowWidth } = useWindowSize();

  const contentLayout = computed(() => {
    return windowWidth.value > 768 ? "default" : "mobile";
  });

  return {
    contentLayout,
  };
}
