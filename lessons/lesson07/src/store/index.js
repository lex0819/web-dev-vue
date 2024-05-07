// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export default new Vuex.Store({

export default {
    state: {
        count: 0,
        cartItems: [],
        productsList: [],
    },
    mutations: {
        INCREASE(state) {
            state.count++;
        },
        DECREASE(state) {
            if (state.count > 0) {
                state.count--;
            } else {
                state.count = 0;
            }
        },
        SET_PRODUCTS(state, payload) {
            state.productsList = payload;
        },
        SET_CART(state, payload) {
            state.cartItems = payload;
        },
        ADD_ITEM_TO_CART(state, payload) {
            state.cartItems.push({ ...payload, count: 1 });
        },
        CHANGE_ITEM_COUNT_IN_CART(state, payload) {
            const newCartItems = state.cartItems.map((it) => {
                if (payload.id === it.id) {
                    it.count = payload.count;
                    return it;
                } else {
                    return it;
                }
            });
            state.cartItems = [...newCartItems];
        },
        REMOVE_ITEM_FROM_CART(state, id) {
            const newCartItems = state.cartItems.filter((it) => id !== it.id);
            state.cartItems = [...newCartItems];
        },
        SET_ENABLE_PRODUCT(state, id) {
            const newProductsList = state.productsList.map((it) => {
                if (id === it.id) {
                    it.inCart = !it.inCart;
                    return it;
                } else {
                    return it;
                }
            });
            state.productsList = [...newProductsList];
        },
        ADD_NEW_PRODUCT(state, payload) {
            state.productsList.push({ ...payload, inCart: false });
        },
    },
    getters: {
        productsList: (state) => state.productsList,
        cartItems: (state) => state.cartItems,
        totalItems: (state) => state.cartItems.length,
        totalPrice: (state) =>
            state.cartItems.reduce((acc, el) => acc + el.price * el.count, 0),
    },
    actions: {
        fetchProducts({ commit }) {
            fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then((json) =>
                    json.map((it) => {
                        return { ...it, inCart: false };
                    })
                )
                .then((extra) => commit('SET_PRODUCTS', extra));
        },
        addToCart({ commit }, payload) {
            commit('ADD_ITEM_TO_CART', payload);
        },
    },
};
