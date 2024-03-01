<script setup lang="ts">
import Header from "~/components/header/Header.vue";
</script>

<template>
  <div class="relative">
    <Header />
    <div class="relative container mx-auto overflow-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
