<script setup lang="ts">
import { defineProps } from "vue";
import Button from "@/components/ui/button/Button.vue";
import { HamburgerMenuIcon } from "@radix-icons/vue";

defineProps<{
  collapse: boolean;
  toggleCollapse: () => void;
}>();
</script>

<template>
  <Button variant="link" @click.prevent="toggleCollapse">
    <svg width="32" height="32" viewBox="0 0 60 40" fill="none" :class="['Header__toggle-svg', { active: collapse }]">
      <g stroke="#18181b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path id="top-line" d="M10,10 L50,10 Z"></path>
        <path id="middle-line" d="M10,20 L50,20 Z"></path>
        <path id="bottom-line" d="M10,30 L50,30 Z"></path>
      </g>
    </svg>
  </Button>
</template>

<style scoped>
#top-line,
#bottom-line,
#middle-line {
  transform-box: fill-box;
  transform-origin: center;
}

svg.active {
  #top-line {
    animation: down-rotate 0.6s ease-out both;
  }
  #bottom-line {
    animation: up-rotate 0.6s ease-out both;
  }
  #middle-line {
    animation: hide 0.6s ease-out forwards;
  }
}

@keyframes up-rotate {
  0% {
    animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
    transform: translateY(0px);
  }
  30% {
    transform-origin: center;
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateY(-10px);
  }
  100% {
    transform-origin: center;
    transform: translateY(-10px) rotate(45deg) scale(0.9);
  }
}

@keyframes down-rotate {
  0% {
    animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
    transform: translateY(0px);
  }
  30% {
    transform-origin: center;
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateY(10px);
  }
  100% {
    transform-origin: center;
    transform: translateY(10px) rotate(-45deg) scale(0.9);
  }
}

@keyframes hide {
  29% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
