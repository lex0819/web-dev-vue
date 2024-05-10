<template>
    <div>
        <div v-if="getPost">
            <h1>{{ getPost.title }}</h1>
            <p>{{ getPost.body }}</p>
            <UserOwner :user="getPost.userId" />
            <PostComments :post="id" />
        </div>
        <div v-else>The post is not found</div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';
import UserOwner from '@/components/post/UserOwner.vue';
import PostComments from '@/components/post/PostComments.vue';

export default {
    name: 'MainPost',
    components: {
        UserOwner,
        PostComments,
    },
    data() {
        return {
            id: null,
            // userId: null,
        };
    },
    methods: {
        ...mapMutations(['SET_POSTS']),
        // getUserId(id) {
        //     this.activeUser = id;
        // },
    },
    computed: {
        ...mapState(['posts']),
        ...mapActions(['fetchPosts']),
        ...mapGetters(['getPostById']),
        getPost() {
            return this.getPostById(this.id);
        },
    },
    created() {
        this.SET_POSTS(this.fetchPosts);
        this.id = this.$route.params.id;
    },
};
</script>
