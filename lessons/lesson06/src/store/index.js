import Vue from 'vue';
import Vuex from 'vuex';
// import {  } from './payments';

Vue.use(Vuex);

// const state = {
//     paymentsList: [],
//     categoryList: [],
// };

// const mutations = {
//     setPaymentsListData(state, payload) {
//         state.paymentsList = payload;
//     },
//     addDataToPaymentsList(state, payload) {
//         state.paymentsList.push(payload);
//     },
//     ediPaymentsListFirstElement(state, payload) {
//         Vue.set(state.paymentsList, 0, payload);
//     },
//     setCategories(state, payload) {
//         if (!Array.isArray(payload)) {
//             payload = [payload];
//         }
//         state.categoryList.push(...payload);
//     },
// };

// const getters = {
//     // получаем список paymentsList
//     getPaymentsList: (state) => {
//         state.paymentsList;
//     },
//     // получаем суммарную стоимость всех платежей
//     getFullPaymentValue: (state) => {
//         return state.paymentsList.reduce((res, cur) => res + cur.value, 0);
//     },
//     getCategoryList: (state) => {
//         state.categoryList;
//     },
// };

export default new Vuex.Store({
    state: { paymentsList: [] },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload;
        },
        addDataToPaymentsList(state, payload) {
            state.paymentsList.push(payload);
        },
    },
    getters: {
        getFullPaymentValue: (state) => {
            return state.paymentsList.reduce(
                (accum, cur) => accum + cur.value,
                0
            );
        },
        getPaymentsList: (state) => state.paymentsList,
    },
    actions: {
        fetchData({ commit }) {
            return new Promise((resolve) => {
                // имитируем работу с сетью, ставим задержку получения данных в 1 секунду
                setTimeout(() => {
                    resolve([
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
                    ]);
                }, 1000);
            }).then((res) => {
                // запускаем изменение состояния через commit
                commit('setPaymentsListData', res);
            });
        },
        loadCategories({ commit }) {
            return new Promise((resolve) => {
                // имитируем работу с сетью
                setTimeout(() => {
                    resolve([
                        'Food',
                        'Transport',
                        'Education',
                        'Entertainment',
                    ]);
                }, 1000);
            }).then((res) => {
                // запускаем изменение состояния через commit
                commit('setCategories', res);
            });
        },
    },
});
