<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { type NavigationVariants } from ".";

setPageLayout("default");

const props = defineProps<{
  class?: HTMLAttributes["class"];
  variant?: NavigationVariants["variant"];
  isOpen?: boolean;
}>();
</script>

<template>
  <div class="relative h-full min-h-screen w-max-[420px]" :class="props.class">
    <div class="fixed h-full w-1/3 flex flex-col items-center justify-between py-6 left-0">
      <div class="text-center">
        <h1 class="logo">
          <a href="/">Burak</a>
        </h1>
      </div>
      <Transition name="fade">
        <aside v-show="isOpen">
          <slot />
        </aside>
      </Transition>
      <div class="copyright">
        <p class="text-gray-500">
          &copy; 2024 Burak Created By
          <a class="font-bold" target="_blank" rel="external" href="https://github.com/oburakergen">Me</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
