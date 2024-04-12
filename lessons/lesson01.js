new Vue({
    el: '#app',
    data: {
        hello: 'Hello World from Vue!',
        counter: 0,
        buttonText: 'Купить',
        age: 0,
        toggleText: false,
        randomNumber: -1,
        randomNumberText: '',
        isRandom: false,
    },
    methods: {
        buy() {
            this.counter++;
            this.buttonText = 'Товар в Корзине';
        },
        getRandom() {
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
});
