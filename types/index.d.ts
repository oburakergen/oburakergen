declare module '#app' {
  interface NuxtApp {
    $device: string
    $language: string
    $anime: any
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $device: string
    $language: string
    $anime: any
  }
}

export {}
