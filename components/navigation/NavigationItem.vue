<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/lib/utils";
import NavigationLink from "@/components/navigation/navigationLink";
import { navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ul :class="cn('relative flex flex-col items-center gap-0.5', props.class)">
    <li :class="cn(navigationMenuTriggerStyle(), 'bg-transparent')">
      <NavigationLink to="/" class="menu-link"> Home </NavigationLink>
    </li>
    <li :class="cn(navigationMenuTriggerStyle(), 'bg-transparent')">
      <NavigationLink to="/about" class="menu-link"> About </NavigationLink>
    </li>
    <li :class="cn(navigationMenuTriggerStyle(), 'bg-transparent')">
      <NavigationLink to="/portfolio" class="menu-link"> Portfolio </NavigationLink>
    </li>
    <li :class="cn(navigationMenuTriggerStyle(), 'bg-transparent')">
      <NavigationLink to="/blog" class="menu-link"> Blog </NavigationLink>
    </li>
    <li :class="cn(navigationMenuTriggerStyle(), 'bg-transparent')">
      <NavigationLink to="/contact" class="menu-link"> Contact </NavigationLink>
    </li>
  </ul>
</template>

<style scoped></style>
