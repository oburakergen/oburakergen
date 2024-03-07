<script setup lang="ts">
import { HamburgerMenuIcon } from "@radix-icons/vue";
import { ref, type Ref } from "vue";
import NavigationItem from "@/components/navigation/NavigationItem.vue";

const collapse: Ref<boolean> = ref(false);

const toggleCollapse = () => {
  collapse.value = !collapse.value;
};
</script>

<template>
  <header class="relative w-full shadow bg-primary-foreground px-2 py-4">
    <div class="flex flex-nowrap justify-between">
      <div class="text-center">
        <h1 class="logo">
          <a href="/">Burak</a>
        </h1>
      </div>
      <div class="flex items-center">
        <Button variant="link" @click.prevent="toggleCollapse">
          <HamburgerMenuIcon class="h-6 w-6" />
        </Button>
        <div v-show="collapse">
          <NavigationItem variant="left" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
