<template>
    <div>
        <div class="main">
            <div>
                <h2>List of all posts</h2>
                <ul>
                    <li
                        v-for="post in getListPostsByUserId(activeUser)"
                        :key="post.id"
                    >
                        <router-link :to="`/post/${post.id}`">
                            {{ post.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <UsersList @selectUser="getUserId" />
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';
import UsersList from '@/components/UsersList.vue';

export default {
    name: 'PostsList',
    components: {
        UsersList,
    },
    data() {
        return {
            activeUser: null,
        };
    },
    methods: {
        ...mapMutations(['SET_POSTS']),
        getUserId(id) {
            this.activeUser = id;
        },
    },
    computed: {
        ...mapState(['posts']),
        ...mapActions(['fetchPosts']),
        ...mapGetters(['getListPostsByUserId']),
    },
    created() {
        this.SET_POSTS(this.fetchPosts);
    },
};
</script>
