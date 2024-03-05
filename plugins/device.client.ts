import { useBreakpoints } from "@vueuse/core";

const getDevice = (breakpoints: string = "default") => {
  switch (breakpoints) {
    case "mobile":
      return "mobile";
    case "tablet":
      return "mobile";
    case "laptop":
      return "default";
    case "desktop":
      return "default";
    default:
      return "default";
  }
};

const breakpoints = useBreakpoints({
  mobile: 0, // optional
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
});

export default defineNuxtPlugin({
  name: "device-plugin",
  enforce: "post",
  setup() {
    return {
      provide: {
        device: getDevice(breakpoints.active().value),
      },
    };
  },
  hooks: {
    "app:suspense:resolve"() {
      setPageLayout(getDevice(breakpoints.active().value));
    },
  },
});
