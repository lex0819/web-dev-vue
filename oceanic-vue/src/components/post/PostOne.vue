<template>
    <div>
        <div>
            <h1>{{ postOne.title }}</h1>
            <p>{{ postOne.body }}</p>
        </div>
        <UserOwner :userId="postOne.userId" />
        <CommentsList />
        <div v-if="postOne">
            <div>
                <h1>{{ postOne.title }}</h1>
                <p>{{ postOne.body }}</p>
            </div>
            <UserOwner :userId="postOne.userId" />
            <CommentsList />
        </div>
        <div v-else>
            <h1>The Post has not found</h1>
        </div>
    </div>
</template>

<script setup>
import UserOwner from '@/components/post/UserOwner.vue';
import CommentsList from '@/components/post/CommentsList.vue';
import { onMounted, computed } from 'vue';
import { usePostsStore } from '@/stores/posts.js';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = parseInt(route.params.id);
// const postOne = posts.value.find(id);

const store = usePostsStore();

const postOne = computed(() => {
    return store.getPostById(id);
});

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
