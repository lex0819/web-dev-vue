<template>
    <div class="home">
        <h1>Welcome to jsonplaceholder API</h1>
        <MainList />
    </div>
</template>

<script>
import MainList from '@/components/home/MainList.vue';

export default {
    name: 'HomePage',
    components: {
        MainList,
    },
};
</script>
