<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
console.log(props.error);
</script>

<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <h3>{{ error.statusMessage }}</h3>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>

<style scoped></style>
