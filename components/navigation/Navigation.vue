<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { type NavigationVariants, navigationVariants } from ".";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  variant?: NavigationVariants["variant"];
  isOpen?: boolean;
}>();
</script>

<template>
  <Transition name="fade">
    <aside v-show="isOpen" :class="cn(navigationVariants({ variant }), props.class)">
      <slot />
    </aside>
  </Transition>
</template>

<style scoped></style>
