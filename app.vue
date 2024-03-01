<script setup lang="ts">
import { definePageMeta } from "#imports";

const { width: windowWidth } = useWindowSize();

const layout = ref("default");

onBeforeMount(() => {
  if (windowWidth.value > 768) {
    layout.value = "default";
  } else {
    layout.value = "mobile";
  }
  console.log(layout);
});
definePageMeta({
  middleware: "layout-global",
});
</script>
<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
