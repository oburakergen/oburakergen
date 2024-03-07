<script setup lang="ts"></script>

<template>
  <div class="container mx-auto">
    <div class="relative w-full h-screen xs:h-[90vh] sm:h-[90vh] flex items-center justify-center overflow-hidden">
      <div class="flex flex-col">
        <div class="flex flex-wrap items-center gap-4 justify-center">
          <div class="flex w-max xs:w-full sx:w-full">
            <img
              src="https://avatars.githubusercontent.com/u/72213815?v=4"
              alt="photo"
              class="w-40 h-40 rounded-full"
            />
          </div>
          <div>
            <h1 class="text-3xl capitalize" v-text="$t('author')" />
            <p class="text-gray-500 max-w-[25rem] text-wrap truncate text-justify" v-text="$t('introduction')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
