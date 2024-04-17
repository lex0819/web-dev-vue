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
                id: 0,
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
        randomDiscount() {
            this.discount = Math.round(Math.random() * 20);
        },

        saveNewContact(event) {
            event.preventDefault();
            this.errorFill = '';
            for (const field in this.newContact) {
                // console.log(this.newContact[field]);
                if (this.newContact[field] === '') {
                    this.errorFill = 'You have to fill all fields correct!';
                }
            }
            if (this.errorFill === '') {
                // this.newContact.id = this.getLastContactId + 1;
                this.contacts.push({
                    id: this.contacts.length,
                    ...this.newContact,
                });

                //Copy object as new object!!!
                //this.contacts.push(JSON.parse(JSON.stringify(this.newContact)))
                //or
                //this.contacts.push(structuredClone(this.newContact))

                this.newContact = {
                    name: '',
                    surname: '',
                    phone: '',
                };
            }
        },
    },
    computed: {
        getPrice() {
            return ((this.product.price / 100) * (100 - this.discount)).toFixed(
                2
            );
        },
        // getLastContactId() {
        //     return this.contacts[this.contacts.length - 1].id;
        // },
    },
});
