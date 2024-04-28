<template>
    <div class="mt-3">
        <h2>User List from JSONPlaceHolder</h2>
        <ul class="mt-3 list-group">
            <li v-for="user in users" :key="user.id" class="list-group-item">
                <UserOne :user="user" />
            </li>
        </ul>
    </div>
</template>

<script>
import UserOne from '@/components/task01-Users/UserOne.vue';

export default {
    name: 'UserList',
    components: {
        UserOne,
    },
    props: {
        users: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },

    data() {
        return {};
    },

    methods: {},
};
</script>
