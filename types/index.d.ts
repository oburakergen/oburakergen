declare module '#app' {
  interface NuxtApp {
    $device: string
    $language: string
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $device: string
    $language: string
  }
}

export {}
