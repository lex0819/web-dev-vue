new Vue({
    el: '#app',
    data: {
        hello: 'Hello World from Vue!',
        products: [
            {
                id: 1,
                name: 'product01',
                price: 100,
            },
            {
                id: 2,
                name: 'product02',
                price: 200,
            },
            {
                id: 3,
                name: 'product03',
                price: 300,
            },
            {
                id: 4,
                name: 'product04',
                price: 400,
            },
        ],
        cart: [],
        age: 0,
        toggleText: false,
        randomNumber: -1,
    },
    methods: {
        buy(productId, event) {
            event.target.disabled = true;
            event.target.textContent = 'Product was added to cart';
            this.cart.push(productId);
            // console.log(this.cart.length);
        },
        getRandomNumber() {
            this.randomNumber = Math.round(Math.random() * 10);
            this.isRandom = true;
            if (this.randomNumber > -1 && this.randomNumber < 5) {
                this.randomNumberText = 'Число меньше 5';
            } else if (this.randomNumber >= 5 && this.randomNumber <= 9) {
                this.randomNumberText = 'Число от 5 до 9';
            } else {
                this.randomNumberText = 'Число равно 10';
            }
        },
    },
    computed: {
        numberInfo() {
            if (this.randomNumber === -1) {
                return '';
            } else if (this.randomNumber > -1 && this.randomNumber < 5) {
                return 'Число меньше 5';
            } else if (this.randomNumber >= 5 && this.randomNumber <= 9) {
                return 'Число от 5 до 9';
            } else {
                return 'Число равно 10';
            }
        },
    },
});
