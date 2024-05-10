<template>
    <div>
        <PostsList />
    </div>
</template>

<script>
import PostsList from '@/components/PostsList.vue';

export default {
    name: 'MainList',
    components: {
        PostsList,
    },
    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>
<style>
.main {
    display: flex;
}
</style>
