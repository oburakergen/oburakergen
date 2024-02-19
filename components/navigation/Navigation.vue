<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { type NavigationVariants } from ".";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  variant?: NavigationVariants["variant"];
  isOpen?: boolean;
}>();
</script>

<template>
  <div class="container mx-auto flex flex-col items-center justify-between h-screen py-6" :class="props.class">
    <div class="text-center logo:author">
      <h1 class="font-black text-3xl uppercase font-['Poppins'] tracking-widest">
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
</template>

<style scoped></style>
