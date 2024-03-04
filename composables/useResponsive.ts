import { useWindowSize } from "@vueuse/core";
import { computed, type ComputedRef } from "vue";

export default function useResponsive() {
  const { width: windowWidth } = useWindowSize();

  const contentLayout: ComputedRef<string> = computed(() => {
    return windowWidth.value > 768 ? "desktop" : "mobile";
  });

  return {
    contentLayout,
  };
}
