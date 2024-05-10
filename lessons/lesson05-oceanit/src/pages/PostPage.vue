<template>
    <div class="about">
        <h1>the post</h1>
        <MainPost />
    </div>
</template>
<script>
import MainPost from '@/components/post/MainPost.vue';

export default {
    name: 'PostPage',
    components: {
        MainPost,
    },
};
</script>
