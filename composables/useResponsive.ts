export default function useResponsive() {
  const { width: windowWidth } = useWindowSize();

  const contentLayout = computed(async () => {
    return await (windowWidth.value > 768 ? "default" : "mobile");
  });

  return {
    contentLayout,
  };
}
