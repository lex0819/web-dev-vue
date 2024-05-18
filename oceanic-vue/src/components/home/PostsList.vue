<template>
    <div class="main">
        <div>
            <h2>Posts List</h2>
            <button @click="allPosts">Show all posts</button>
            <ul v-if="activeUser">
                <p>
                    Total posts: {{ store.getTotalPostsByUserId(activeUser) }}
                </p>
                <li
                    v-for="post in store.getListPostsByUserId(activeUser)"
                    :key="post.id"
                >
                    <router-link :to="`/post/${post.id}`">
                        {{ post.title }}
                    </router-link>
                </li>
            </ul>
            <ul v-else>
                <p>Total posts: {{ store.getTotalPosts }}</p>
                <li v-for="post in store.posts" :key="post.id">
                    <router-link :to="`/post/${post.id}`">
                        {{ post.title }}
                    </router-link>
                </li>
            </ul>
        </div>
        <UsersList v-model="activeUser" />
    </div>
</template>

<script setup>
import UsersList from '@/components/home/UsersList.vue';
import { ref, onMounted } from 'vue';
import { usePostsStore } from '@/stores/posts.js';

const store = usePostsStore();
const activeUser = ref('');

function allPosts() {
    activeUser.value = null;
}

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

<style>
.main {
    display: flex;
}
</style>
