import { defineStore } from 'pinia';
import axios from 'axios';

export const usePostsStore = defineStore('post', {
    state: () => ({
        posts: []
    }),
    getters: {
        getPosts(state) {
            return state.posts;
        },
        getListPostsByUserId: (state) => {
            return (id) => state.posts.filter((post) => id == post.userId);
        },
        getPostById: (state) => {
            return (id) => state.posts.find((post) => id == post.id);
        },
        getTotalPosts(state) {
            return state.posts.length;
        },
        getTotalPostsByUserId: (state) => {
            return (id) => state.posts.filter((post) => id == post.userId).length;
        }
    },
    actions: {
        async fetchPosts() {
            try {
                const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
                this.posts = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        }
    }
});
