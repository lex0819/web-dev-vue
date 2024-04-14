new Vue({
    el: '#app',
    data: {
        product: {
            name: 'T-shirt',
            price: 245,
            url: 'http://img.com/t-shirt.jpg',
        },
        discount: 0,
        users: [
            {
                name: 'Lena',
                age: 20,
            },
            {
                name: 'Bob',
                age: 29,
            },
            {
                name: 'Sam',
                age: 17,
            },
        ],
        items: [
            {
                title: 'bread',
                count: 700,
                isBought: false,
            },
            {
                title: 'butter',
                count: 500,
                isBought: false,
            },
            {
                title: 'cheese',
                count: 300,
                isBought: false,
            },
            {
                title: 'apples',
                count: 1000,
                isBought: false,
            },
        ],
        contacts: [
            {
                name: 'Lena',
                surname: 'Boom',
                phone: '(123)450-45-45',
            },
        ],
        newContact: {
            name: '',
            surname: '',
            phone: '',
        },
        errorFill: '',
    },

    methods: {
        changePrice() {
            this.discount = Math.round(Math.random() * 20);
            this.product.price = (
                (this.product.price / 100) *
                (100 - this.discount)
            ).toFixed(2);
        },
        saveNewContact(event) {
            event.preventDefault();
            this.errorFill = '';
            for (const field in this.newContact) {
                // console.log(this.newContact[field]);
                try {
                    if (this.newContact[field] === '') {
                        this.errorFill = 'You have to fill all fields correct!';
                        throw new Error('You have to fill all fields correct!');
                    }
                } catch (error) {
                    console.error(error.message);
                }
            }
            if (this.errorFill === '') {
                this.contacts.push(this.newContact);
                this.newContact = {
                    name: '',
                    surname: '',
                    phone: '',
                };
            }
        },
    },
    computed: {},
});
