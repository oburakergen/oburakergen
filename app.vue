<script setup lang="ts">
const appConfig = useAppConfig();
</script>
<template>
  <NuxtLayout :name="appConfig.layout">
    <NuxtPage />
  </NuxtLayout>
</template>
