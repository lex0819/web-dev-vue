import { defineStore } from 'pinia';
import axios from 'axios';

export const useUsersStore = defineStore('user', {
    state: () => ({
        users: []
    }),
    getters: {
        getUsers(state) {
            return state.users;
        },
        getUserById: (state) => {
            return (userId) => state.users.find((user) => user.id === userId);
        }
    },
    actions: {
        async fetchUsers() {
            try {
                const data = await axios.get('https://jsonplaceholder.typicode.com/users');
                this.users = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        }
    }
});
