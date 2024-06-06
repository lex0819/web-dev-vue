<script setup>
  import { ref, computed } from 'vue';
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { usePostStore } from '@/stores/post'
  import AuthorsList from '@/components/AuthorsList.vue';

  const { posts, loading, error, getTotalPosts  } = storeToRefs(usePostStore())
  const { fetchPosts, getPostsPerAuthor, getTotalPostsPerAuthorId} = usePostStore()

  const activeAuthor = ref('')

  fetchPosts()

  function allPosts() {
    activeAuthor.value = null
}

</script>

<template>
  <div class="main">
    <div>
      <p v-if="loading">Loading posts...</p>
      <p v-if="error">{{ error.message }}</p>
      <div v-if="posts">
        <h2>Posts List</h2>
        <button @click="allPosts">Show all posts</button>
        <ul v-if="activeAuthor">
          
          <p>
              Total posts: {{ getTotalPostsPerAuthorId(activeAuthor) }}
          </p>
          <li
              v-for="post in getPostsPerAuthor(activeAuthor)"
              :key="post.id"
          >
              <RouterLink :to="`/post/${post.id}`">
                  {{ post.title }}
              </RouterLink>
              <p>{{ post.body }}</p>
          </li>
      </ul>
      <ul v-else>
          <p>Total posts: {{ getTotalPosts }}</p>
          <li v-for="post in posts" :key="post.id">
              <RouterLink :to="`/post/${post.id}`">
                  {{ post.title }}
              </RouterLink>
          </li>
      </ul>
      </div>
    </div>
    <AuthorsList v-model="activeAuthor"/>
  </div>
</template>
<style>
.main{
  display: flex;
}
</style>