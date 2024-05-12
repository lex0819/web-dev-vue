import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
// import store from '@/store/index.js'; // check existing id of post

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/post/:id',
        name: 'post',
        component: () => import('@/pages/PostPage.vue'),
        //it works only first
        //but it redirect to 404 after refresh!!!!!
        //check existing id of post in vuex and redirect to 404 when id is not existed
        // beforeEnter: (to, from, next) => {
        //     console.log('to', to);
        //     console.log('from', from);
        //     const isId = store.getters.getPostById(to.params.id);
        //     console.log(isId);
        //     if (isId) {
        //         next();
        //         return;
        //     } else {
        //         next('/404');
        //     }
        // },
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/pages/PageNotFound404.vue'),
    },
    {
        path: '*',
        redirect: '/404',
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
