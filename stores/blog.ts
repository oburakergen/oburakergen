import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useBlogStore = defineStore("blog", () => {
  const posts: Ref<string[]> = ref([]);

  const getPosts = computed(() => posts.value);

  const setPosts = (newPosts: string[]) => {
    posts.value = newPosts;
  };

  return {
    posts,
    getPosts,
    setPosts,
  };
});
