<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link>
        </nav>
        <div v-if="getPost">
            <h1>{{ getPost.title }}</h1>
            <p>{{ getPost.body }}</p>
            <UserOwner :user="getPost.userId" />
            <PostComments />
        </div>
        <div v-else>
            <h1>the post {{ id }} is not found</h1>
        </div>
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
        };
    },
    methods: {
        ...mapMutations(['SET_POSTS']),
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
