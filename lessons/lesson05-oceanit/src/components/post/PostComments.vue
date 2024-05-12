<template>
    <div>
        <h3>Comments</h3>
        <div>
            <ul v-if="getCommentsByPostId(id)">
                <li
                    v-for="comment in getCommentsByPostId(id)"
                    :key="comment.id"
                >
                    <p>{{ comment.name }}</p>
                    <span>{{ comment.email }}</span>
                    <p>{{ comment.body }}</p>
                </li>
            </ul>
            <div v-else>The comments are not yet</div>
        </div>
        <form action="">
            <h3>add comment</h3>
            <input type="text" />
            <input type="text" />
            <textarea name="" id=""></textarea>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

export default {
    name: 'PostComments',

    data() {
        return {
            id: null,
        };
    },
    methods: {
        ...mapMutations(['SET_COMMENTS']),
    },
    computed: {
        ...mapState(['comments']),
        ...mapActions(['fetchComments']),
        ...mapGetters(['getCommentsByPostId']),
    },
    created() {
        this.SET_COMMENTS(this.fetchComments);
        this.id = this.$route.params.id;
    },
};
</script>
