import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // начальное состояние
        paymentsList: [],
    },
    mutations: {
        // методы для изменения состояния
        SET_PAYMENTS(state, payload) {
            state.paymentsList = payload;
        },
        ADD_PAY(state, payload) {
            state.paymentsList.push(payload);
        },
    },

    getters: {
        // методы для чтения состояния
        getPayments: (state) => state.paymentsList,
        getFullPayments: (state) => {
            return state.paymentsList.reduce((acc, it) => acc + it.value, 0);
        },
    },
    actions: {
        // методы для асинхронных операций
        fetchData({ commit }) {
            setTimeout(() => {
                const paymentListJSON = [
                    {
                        date: '28.03.2020',
                        category: 'Food',
                        value: 169,
                    },
                    {
                        date: '24.03.2020',
                        category: 'Transport',
                        value: 360,
                    },
                    {
                        date: '24.03.2020',
                        category: 'Food',
                        value: 532,
                    },
                ];
                commit('SET_PAYMENTS', paymentListJSON);
            }, 1000);
        },
    },
    modules: {
        // модули Vuex для разделения хранилища на под-хранилища
    },
});
