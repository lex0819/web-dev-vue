import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        users: [],
        comments: [],
    },
    getters: {
        getListPostsByUserId: (state) => (id) => {
            if (id) {
                return state.posts.filter((post) => id == post.userId);
            } else {
                return state.posts;
            }
        },
        getPostById: (state) => (id) => {
            if (id) {
                return state.posts.find((post) => id == post.id);
            } else {
                return null;
            }
        },
    },
    mutations: {
        SET_POSTS(state, payload) {
            state.posts = payload;
        },
        SET_USERS(state, payload) {
            state.users = payload;
        },
        SET_COMMENTS(state, payload) {
            state.comments = payload;
        },
    },
    actions: {
        fetchPosts({ commit }) {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Error getting Posts data');
                    } else {
                        return response.json();
                    }
                })
                .then((json) => commit('SET_POSTS', json))
                .catch((er) => console.log(er.message));
        },
        fetchUsers({ commit }) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Error getting Users data');
                    } else {
                        return response.json();
                    }
                })
                .then((json) => commit('SET_USERS', json))
                .catch((er) => console.log(er.message));
        },
        fetchComments({ commit }) {
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Error getting Comments data');
                    } else {
                        return response.json();
                    }
                })
                .then((json) => commit('SET_COMMENTS', json))
                .catch((er) => console.log(er.message));
        },
    },
});
