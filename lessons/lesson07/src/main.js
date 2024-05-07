import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
    store: new Vuex.Store(store),
    render: (h) => h(App),
}).$mount('#app');
