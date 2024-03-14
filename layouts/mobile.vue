<script setup lang="ts">
import Header from "@/components/header/Header.vue";
</script>

<template>
  <div class="relative flex flex-col h-screen">
    <Header />
    <slot />
  </div>
</template>

<style scoped></style>
