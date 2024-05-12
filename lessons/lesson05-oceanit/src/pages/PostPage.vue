<template>
    <div class="post">
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
