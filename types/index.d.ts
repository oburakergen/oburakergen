declare module "#app" {
  interface NuxtApp {
    $device: "default" | "mobile";
    $language: string;
    $anime: any;
    appConfig: any;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $device: "default" | "mobile";
    $language: string;
    $anime: any;
    appConfig: any;
  }
}

export {};
