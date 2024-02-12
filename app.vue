<script setup lang="ts">
import useResponsive from "~/composables/useResponsive";

const { contentLayout } = useResponsive();
</script>
<template>
  <NuxtLayout :name="contentLayout">
    <NuxtPage />
  </NuxtLayout>
</template>
