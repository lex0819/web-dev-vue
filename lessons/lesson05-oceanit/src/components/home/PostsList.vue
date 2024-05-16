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
                <!-- <nav>
                    <ul class="pagination">
                        <li v-for="page in totalPages" :key="page">
                            <router-link :to="`/${page}`">
                                {{ page }}
                            </router-link>
                        </li>
                    </ul>
                </nav> -->
            </div>
            <UsersList @selectUser="getUserId" />
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';
import UsersList from '@/components/home/UsersList.vue';

export default {
    name: 'PostsList',
    components: {
        UsersList,
    },
    data() {
        return {
            activeUser: null,
            perPage: 8,
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
        // allPosts() {
        //     return this.getListPostsByUserId(this.activeUser);
        // },
        // currentPage() {
        //     //получаем текущую страницу прямо из роутера
        //     return this.$route.params.page || 1;
        // },
        // totalPages() {
        //     return Math.ceil(this.allPosts.length / this.perPage);
        // },
        // paginatedPostsList() {
        //     const { currentPage, perPage } = this;
        //     const startIndex = (currentPage - 1) * perPage;
        //     const endIndex = startIndex + perPage;
        //     return Object.values(this.allPosts).slice(startIndex, endIndex);
        // },
    },
    created() {
        this.SET_POSTS(this.fetchPosts);
    },
};
</script>
