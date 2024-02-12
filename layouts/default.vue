<script setup lang="ts">
import Navigation from "@/components/navigation/Navigation";
import NavigationItem from "~/components/navigation/NavigationItem.vue";
</script>

<template>
  <div class="relative flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
    <Navigation :is-open="true" variant="left" class="bg-primary-foreground h-screen">
      <NavigationItem variant="left" />
    </Navigation>
    <slot />
  </div>
</template>

<style scoped></style>
