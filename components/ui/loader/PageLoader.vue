<script setup lang="ts">
import { type HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
const props = defineProps<{ class?: HTMLAttributes["class"] }>();
const { $anime } = useNuxtApp();

const pageLoaderRef = ref<HTMLElement | null>(null);

onMounted(() => {
  $anime({
    targets: "#loader-title",
    duration: 1000,
    opacity: "0",
    translateY: -100,
    easing: "linear",
  });
  $anime({
    targets: "#loader-clip-1",
    duration: 750,
    delay: 650,
    top: "-70%",
    easing: "easeInOutQuad",
  });
  $anime({
    targets: "#loader-clip-2",
    duration: 750,
    delay: 650,
    bottom: "-50%",
    easing: "easeInOutQuad",
    complete: () => {
      pageLoaderRef.value?.remove();
    },
  });
});
</script>

<template>
  <Teleport to="body">
    <div
      ref="pageLoaderRef"
      :class="cn('fixed top-0 w-full h-screen z-10 flex flex-col justify-center items-center', props.class)"
    >
      <div id="loader-clip-1" class="absolute w-full top-0 bg-black h-1/2"></div>
      <div id="loader-clip-2" class="absolute w-full bottom-0 bg-black h-1/2"></div>
      <h1
        id="loader-title"
        class="z-10 text-white text-center text-wrap text-4xl subpixel-antialiased font-black capitalize drop-shadow-xl md:filter-none"
      >
        {{ $t("author") }}
      </h1>
    </div>
  </Teleport>
</template>

<style scoped></style>
