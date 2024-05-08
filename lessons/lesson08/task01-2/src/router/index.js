import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home.vue';
// import About from '@/pages/About.vue';
// import Contacts from '@/pages/Contacts.vue';
// import Page404 from '@/pages/Page404.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            // component: About,
            component: () =>
                import(/* webpackChunkName: "about" */ '../pages/About.vue'),
        },
        {
            path: '/contacts',
            name: 'contacts',
            // component: Contacts,
            component: () => import('../pages/Contacts.vue'),
        },
        {
            path: '/404',
            name: '404',
            // component: Page404,
            component: () => import('../pages/Page404.vue'),
        },
        {
            path: '*',
            redirect: '404',
        },
    ],
});

const isAuth = false; //not logged

router.beforeEach((to, from, next) => {
    console.log(to, from);
    if (to.name === 'contacts' && !isAuth) next({ name: 'home' });
    else next();
});

export default router;
