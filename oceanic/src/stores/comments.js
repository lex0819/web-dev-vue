import { defineStore } from 'pinia';
import axios from 'axios';

export const useCommentsStore = defineStore('comment', {
    state: () => ({
        comments: []
    }),
    getters: {
        getComments(state) {
            return state.comments;
        },
        getCommentsListByPostId: (state) => {
            return (id) => state.comments.filter((com) => id == com.postId);
        }
    },
    actions: {
        async fetchComments() {
            try {
                const data = await axios.get('https://jsonplaceholder.typicode.com/comments');
                this.comments = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        }
    }
});
