new Vue({
    el: '#app',
    data: {
        todos: [
            {
                id: 0,
                title: 'learn js',
            },
            {
                id: 1,
                title: 'play game',
            },
        ],
        list: [
            {
                id: 0,
                text: 'cat and dog',
            },
            {
                id: 1,
                text: 'two big crabs',
            },
            {
                id: 2,
                text: 'I love Bob',
            },
            {
                id: 3,
                text: 'Category',
            },
            {
                id: 4,
                text: 'My bice',
            },
            {
                id: 5,
                text: 'White rabbit',
            },
        ],
        products: [
            {
                id: 0,
                title: 'iPhone X',
                desc: 'Wow!',
                price: 1000,
            },
            {
                id: 1,
                title: 'iPhone 15',
                desc: 'Very good!',
                price: 2500,
            },
            {
                id: 2,
                title: 'iPhone 12',
                desc: 'Excellent!',
                price: 1700,
            },
            {
                id: 3,
                title: 'iPhone 14',
                desc: 'So cute!',
                price: 2100,
            },
            {
                id: 4,
                title: 'iPhone 11',
                desc: 'Hello!',
                price: 1600,
            },
        ],
    },
    methods: {
        deleteTodosfromChild(data) {
            this.todos = JSON.parse(JSON.stringify(data));
        },
    },
});
