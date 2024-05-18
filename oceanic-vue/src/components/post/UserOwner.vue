<template>
    <div>
        <h2>{{ store.getUserById(userId).name }}</h2>
        <p>{{ store.getUserById(userId).email }}</p>
        <p>{{ store.getUserById(userId).phone }}</p>
        <p>{{ store.getUserById(userId).website }}</p>
        <p>{{ store.getUserById(userId).company.name }}</p>
        <p>{{ store.getUserById(userId).address.city }}</p>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUsersStore } from '@/stores/users.js';

const store = useUsersStore();

defineProps({
    userId: Number,
});

//important for fetching data from server !!!
//---------------
// const users = computed(() => {
//     return store.users;
// });
onMounted(() => {
    store.fetchUsers();
});
//---------------
</script>

<style></style>
