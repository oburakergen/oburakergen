<script setup lang="ts">
import Header from "~/components/header/Header.vue";
</script>

<template>
  <div class="relative grid grid-cols-3">
    <Header>Header</Header>
    <div class="col-span-3">
      <div class="relative container mx-auto overflow-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
