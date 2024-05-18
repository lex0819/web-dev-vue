import { defineStore } from 'pinia';
import { usePostStore } from './post';

export const useCommentStore = defineStore({
    id: 'comment',
    state: () => ({
        comments: [],
    }),
    getters: {
        // getComments(state) {
        //     return state.comments;
        // },
        getPostComments: (state) => {
            const postSore = usePostStore();
            return state.comments.filter(
                (post) => post.postId === postSore.post.id
            );
        },
    },
    actions: {
        async fetchComments() {
            this.comments = await fetch(
                'https://jsonplaceholder.typicode.com/comments'
            ).then((response) => response.json());
        },
    },
});
