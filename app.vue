<script setup lang="ts">
import useResponsive from "~/composables/useResponsive";

const { contentLayout } = useResponsive();

definePageMeta({
  middleware: defineNuxtRouteMiddleware(() => {
    console.log(contentLayout.value);
  }),
});
</script>
<template>
  <NuxtLayout :name="contentLayout">
    <NuxtPage />
  </NuxtLayout>
</template>
