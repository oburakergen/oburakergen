<script setup lang="ts"></script>

<template>
  <div class="container mx-auto">
    <div class="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div class="flex flex-col">
        <div class="flex items-center">
          <div class="photo">
            <img
              src="https://images.unsplash.com/photo-1631533943943-3e3e3e3e3e3e"
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
