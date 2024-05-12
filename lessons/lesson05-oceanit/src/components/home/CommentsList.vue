<template>
    <div>
        <!-- -->
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
    name: 'CommentsList',
    methods: {
        ...mapMutations(['SET_COMMENTS']),
    },
    computed: {
        ...mapState(['comments']),
        ...mapActions(['fetchComments']),
    },
    created() {
        this.SET_COMMENTS(this.fetchComments);
    },
};
</script>
