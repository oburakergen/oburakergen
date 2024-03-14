<script setup lang="ts">
import { ref, type Ref } from "vue";
import NavigationItem from "@/components/navigation/NavigationItem.vue";
import MenuIcon from "@/components/ui/menu-icon/MenuIcon.vue";

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
        <MenuIcon :collapse="collapse" :toggle-collapse="toggleCollapse" />
        <Transition name="slide-up">
          <div v-show="collapse" class="absolute top-full w-full left-0 z-10">
            <NavigationItem variant="left" class="bg-primary-foreground shadow py-5" />
          </div>
        </Transition>
      </div>
    </div>
  </header>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}
.slide-up-enter {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
