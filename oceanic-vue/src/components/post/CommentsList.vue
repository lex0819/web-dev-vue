<template>
    <div>
        <h2>Comments</h2>
        <ul>
            <li
                v-for="comment in store.getCommentsListByPostId(
                    route.params.id
                )"
                :key="comment.id"
            >
                <p>{{ comment.name }}</p>
                <p>{{ comment.email }}</p>
                <p>{{ comment.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { useCommentsStore } from '@/stores/comments.js';

const store = useCommentsStore();
const route = useRoute();

//important for fetching data from server !!!
//---------------
// const users = computed(() => {
//     return store.comments;
// });
onMounted(() => {
    store.fetchComments();
});
//---------------
</script>

<style></style>
