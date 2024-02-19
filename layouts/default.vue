<script setup lang="ts">
import Navigation from "@/components/navigation/Navigation.vue";
import NavigationItem from "~/components/navigation/NavigationItem.vue";
</script>

<template>
  <div class="relative grid grid-cols-3">
    <Navigation :is-open="true" variant="left" class="bg-primary-foreground">
      <NavigationItem variant="left" />
    </Navigation>
    <div class="col-span-2">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
