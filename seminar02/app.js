new Vue({
    el: '#app',
    data: {
        products: [
            {
                id: 0,
                title: 'iPhone X',
                price: 1000,
            },
            {
                id: 1,
                title: 'iPhone 15',
                price: 2500,
            },
            {
                id: 2,
                title: 'iPhone 12',
                price: 1700,
            },
            {
                id: 3,
                title: 'iPhone 14',
                price: 2100,
            },
            {
                id: 4,
                title: 'iPhone 11',
                price: 1600,
            },
        ],
    },
    methods: {
        productsSortAsc() {
            this.products.sort((a, b) => a.price - b.price);
        },
        productsSortDesc() {
            this.products.sort((a, b) => b.price - a.price);
        },
    },
    computed: {},
});
