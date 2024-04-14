new Vue({
    el: '#app',
    data: {
        linkHref: 'product.html',
        imgPhoto: 'photo.jpg',
        styleBlock: {
            backgroundColor: 'green',
            color: 'yellow',
        },
        modelData: '',
        firstNumber: 0,
        secondNumber: 0,
        result: 0,
        blockWidth: 100,
        blockColor: 'white',
        listItems: [1, 4, 6, 2, 5],
        newItem: '',
        data: [
            { title: 'New Year', text: 'New Year New Year New Year New Year' },
            {
                title: 'Hello!',
                text: 'Hello World! Hello World! Hello World! Hello World! ',
            },
        ],
        likeToggle: false,
    },
    methods: {
        send() {
            console.log('Text from input was sent!');
        },
        headingText() {
            if (this.modelData === '') {
                this.modelData = "Site's title";
            } else {
                return;
            }
        },
        sumCalc() {
            this.result = this.firstNumber + this.secondNumber;
        },
        substractureCalc() {
            this.result = this.firstNumber - this.secondNumber;
        },
        multCalc() {
            this.result = this.firstNumber * this.secondNumber;
        },
        dividerCalc() {
            try {
                if (this.secondNumber === 0) {
                    throw new Error("Mustn't divide by zero!!!");
                }
                this.result = Math.round(this.firstNumber / this.secondNumber);
            } catch (error) {
                console.log(error.message);
            }
        },
        addItem() {
            this.listItems.push(this.newItem);
            this.newItem = '';
        },
    },
    computed: {
        changeBlock() {
            return {
                width: `${this.blockWidth}px`,
                height: `${this.blockWidth}px`,
                backgroundColor: this.blockColor,
                border: '1px solid #999',
            };
        },
    },
});
