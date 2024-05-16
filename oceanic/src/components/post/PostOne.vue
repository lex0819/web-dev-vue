<template>
  <div>
    <div v-if="store.getPostById(route.params.id)">
      <div>
        <h1>{{ store.getPostById(route.params.id).title }}</h1>
        <p>{{ store.getPostById(route.params.id).body }}</p>
      </div>
      <UserOwner :userId="store.getPostById(route.params.id).userId" />
      <CommentsList />
    </div>
    <div v-else>
      <h1>The Post has not found</h1>
    </div>
  </div>
</template>

<script setup>
import UserOwner from "@/components/post/UserOwner.vue";
import CommentsList from "@/components/post/CommentsList.vue";
import { onMounted, computed } from "vue";
import { usePostsStore } from "@/stores/posts.js";
import { useRoute } from "vue-router";

const store = usePostsStore();
const route = useRoute();

//important for fetching data from server !!!
//---------------
// const posts = computed(() => {
//     return store.posts;
// });
onMounted(() => {
  store.fetchPosts();
});
//---------------
</script>

<style></style>
