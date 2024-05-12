<template>
    <div>
        <PostsList />
    </div>
</template>

<script>
import PostsList from '@/components/home/PostsList.vue';

export default {
    name: 'MainList',
    components: {
        PostsList,
    },
};
</script>
<style>
.main {
    display: flex;
}
</style>
