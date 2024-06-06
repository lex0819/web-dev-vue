import { defineStore } from 'pinia';
// import axios from 'axios';

export const usePostStore = defineStore({
    id: 'post',
    state: () => ({
        posts: [],
        post: null,
        loading: false,
        error: null,
    }),
    getters: {
        getPostsPerAuthor: (state) => {
            return (id) => state.posts.filter((post) => id == post.userId);
        },
        getTotalPosts(state) {
            return state.posts.length;
        },
        getTotalPostsPerAuthorId(state){
            return function(id){
                const arr = state.posts.filter((post) => id == post.userId)
                const counts = arr.length
                return counts
            }
        },
    },
    actions: {
        async fetchPosts() {
            this.posts = [];
            this.loading = true;
            try {
                this.posts = await fetch(
                    'https://jsonplaceholder.typicode.com/posts'
                ).then((response) => response.json());
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
        async fetchPost(id) {
            this.post = null;
            this.loading = true;
            try {
                this.post = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${id}`
                ).then((response) => response.json());
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
    },
});
