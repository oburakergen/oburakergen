<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/lib/utils";
import NavigationLink from "@/components/navigation/navigationLink";
import { navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";

const localePath = useLocalePath()
const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ul :class="cn('relative flex flex-col items-center gap-0.5', props.class)">
    <li :class="cn(navigationMenuTriggerStyle(), 'bg-transparent')">
      <NavigationLink draggable="false" :to="localePath('index')" class="menu-link"> {{ $t('menubar.home') }} </NavigationLink>
    </li>
    <li :class="cn(navigationMenuTriggerStyle(), 'bg-transparent')">
      <NavigationLink draggable="false" :to="localePath('about')" class="menu-link"> {{ $t('menubar.about') }} </NavigationLink>
    </li>
    <li :class="cn(navigationMenuTriggerStyle(), 'bg-transparent')">
      <NavigationLink draggable="false" :to="localePath('portfolio')" class="menu-link"> {{ $t('menubar.portfolio') }} </NavigationLink>
    </li>
    <li :class="cn(navigationMenuTriggerStyle(), 'bg-transparent')">
      <NavigationLink draggable="false" :to="localePath('blog')" class="menu-link"> {{ $t('menubar.blog') }} </NavigationLink>
    </li>
    <li :class="cn(navigationMenuTriggerStyle(), 'bg-transparent')">
      <NavigationLink draggable="false" :to="localePath('contact')" class="menu-link"> {{ $t('menubar.contact') }} </NavigationLink>
    </li>
  </ul>
</template>

<style scoped></style>
