<script setup lang="ts">
import Header from "@/components/header/Header.vue";
</script>

<template>
  <div class="relative flex flex-col overflow-hidden">
    <Header />
    <slot />
  </div>
</template>

<style scoped></style>
