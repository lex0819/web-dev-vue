<template>
    <div>
        <h2>Choose one user</h2>
        <select name="user" id="user" v-model="activeUser">
            <option value="">all users</option>
            <option v-for="user in users" :key="user.id" :value="user.id">
                {{ user.name }}
            </option>
        </select>
        <p>Chosen user: {{ activeUser }}</p>

        <h2>List of all users</h2>
        <ul>
            <li v-for="user in store.getUsers" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useUsersStore } from '@/stores/users.js';

const store = useUsersStore();

const activeUser = defineModel();

//important for fetching data from server !!!
//---------------
const users = computed(() => {
    return store.users;
});
onMounted(() => {
    store.fetchUsers();
});
//---------------
</script>
