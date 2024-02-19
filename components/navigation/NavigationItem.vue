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
      <NavigationLink to="/" class="text-gray-500 text-2xl font-['Poppins']"> Home </NavigationLink>
    </li>
    <li :class="cn(navigationMenuTriggerStyle(), 'bg-transparent')">
      <NavigationLink to="/about" class="text-gray-500 text-2xl font-['Poppins']"> About </NavigationLink>
    </li>
    <li :class="cn(navigationMenuTriggerStyle(), 'bg-transparent')">
      <NavigationLink to="/portfolio" class="text-gray-500 text-2xl font-['Poppins']"> Portfolio </NavigationLink>
    </li>
    <li :class="cn(navigationMenuTriggerStyle(), 'bg-transparent')">
      <NavigationLink to="/blog" class="text-gray-500 text-2xl font-['Poppins']"> Blog </NavigationLink>
    </li>
    <li :class="cn(navigationMenuTriggerStyle(), 'bg-transparent')">
      <NavigationLink to="/contact" class="text-gray-500 text-2xl font-['Poppins']"> Contact </NavigationLink>
    </li>
  </ul>
</template>

<style scoped></style>
