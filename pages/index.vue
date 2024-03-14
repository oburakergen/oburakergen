<script setup lang="ts">
import { LinkedinLogoIcon, GithubLogoIcon } from "@radix-icons/vue";
const appConfig = useAppConfig();
</script>

<template>
  <div class="container mx-auto h-full">
    <div class="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div class="flex flex-col">
        <div class="flex flex-wrap items-center gap-4 justify-center">
          <div class="flex w-max xs:w-full sx:w-full">
            <NuxtPicture
              :img-attrs="appConfig.ui.imgAttrs"
              format="avif,webp"
              loading="lazy"
              legacy-format="jpeg"
              src="/profile.jpeg"
              preset="avatar"
              :alt="$t('author')"
            />
          </div>
          <div class="relative flex flex-col gap-2">
            <h1 class="text-3xl capitalize" v-text="$t('author')" />
            <p class="text-gray-500 max-w-[25rem] text-wrap truncate text-justify" v-text="$t('introduction')" />
            <div class="flex gap-6">
              <NuxtLink
                class="drop-shadow"
                to="https://github.com/oburakergen"
                rel="external nofollow"
                target="_blank"
                external
                ><GithubLogoIcon class="w-6 h-6"
              /></NuxtLink>
              <NuxtLink
                class="drop-shadow"
                to="https://www.linkedin.com/in/osman-burak-ergen/"
                rel="external nofollow"
                target="_blank"
                external
                ><LinkedinLogoIcon class="w-6 h-6 drop-shadow"
              /></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
