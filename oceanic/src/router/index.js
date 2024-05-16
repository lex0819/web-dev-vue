import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/post/:id',
            name: 'post',
            component: () => import('@/views/PostView.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/views/NotFound.vue')
        }
    ]
});

router.beforeResolve((to) => {
    const global = inject('global'); // 'hello injections'
    // a pinia store
    const postStore = usePostsStore();
    if (!postStore.getPostById(to.params.id)) return { name: 'NotFound' };
});

export default router;
