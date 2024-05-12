<template>
    <div>
        <h2>List of all users</h2>
        <ul>
            <li v-for="user in users" :key="user.id">{{ user.name }}</li>
        </ul>
        <h3>Choose one user</h3>
        <select name="user" id="user" @change="selectUser" v-model="activeUser">
            <option value="">all</option>
            <option v-for="user in users" :key="user.id" :value="user.id">
                {{ user.name }}
            </option>
        </select>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
    name: 'UsersList',

    data() {
        return {
            activeUser: null,
        };
    },
    methods: {
        ...mapMutations(['SET_USERS']),
        selectUser() {
            this.$emit('selectUser', this.activeUser);
        },
    },
    computed: {
        ...mapState(['users']),
        ...mapActions(['fetchUsers']),
    },
    created() {
        this.SET_USERS(this.fetchUsers);
    },
};
</script>
