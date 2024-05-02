import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        paymentsList: [],
    },
    mutations: {
        SET_PAYMENT(state, payload) {
            state.paymentsList = payload;
        },
        ADD_PAY(state, payload) {
            state.paymentsList.push(payload);
        },
    },
    // getters: {
    //     getFullPaymentValue: (state) => {
    //         return state.paymentsList.reduce(
    //             (accum, cur) => accum + cur.value,
    //             0
    //         );
    //     },
    //     getPaymentsList: (state) => state.paymentsList,
    // },
    // actions: {
    //     fetchData({ commit }) {
    //         return new Promise((resolve) => {
    //             // имитируем работу с сетью, ставим задержку получения данных в 1 секунду
    //             setTimeout(() => {
    //                 resolve([
    //                     {
    //                         date: '28.03.2020',
    //                         category: 'Food',
    //                         value: 169,
    //                     },
    //                     {
    //                         date: '24.03.2020',
    //                         category: 'Transport',
    //                         value: 360,
    //                     },
    //                     {
    //                         date: '24.03.2020',
    //                         category: 'Food',
    //                         value: 532,
    //                     },
    //                 ]);
    //             }, 1000);
    //         }).then((res) => {
    //             // запускаем изменение состояния через commit
    //             commit('setPaymentsListData', res);
    //         });
    //     },
    //     loadCategories({ commit }) {
    //         return new Promise((resolve) => {
    //             // имитируем работу с сетью
    //             setTimeout(() => {
    //                 resolve([
    //                     'Food',
    //                     'Transport',
    //                     'Education',
    //                     'Entertainment',
    //                 ]);
    //             }, 1000);
    //         }).then((res) => {
    //             // запускаем изменение состояния через commit
    //             commit('setCategories', res);
    //         });
    //     },
    // },
});
