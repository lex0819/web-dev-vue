new Vue({
    el: '#app',
    data: {
        message: 'Hello from Vue!!!!',
        counter: 0,
        x: 0,
        y: 0,
        bigText: `<span>new big text <a href="#">info</a></span>`,
        productAddToCart: false, // product isn't in cart
    },
    methods: {
        changeH1() {
            this.message = 'change H1';
        },
        increase(step, event) {
            this.counter += step;
            console.log(event);
        },
        mouseMove(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
    },
});
