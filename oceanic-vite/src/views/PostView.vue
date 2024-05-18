<template>
    <div class="post">
        <PostOne />
    </div>
</template>
<script setup>
import PostOne from '@/components/post/PostOne.vue';

// get from router's props
// defineProps({
//   id: String,
// });
</script>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
