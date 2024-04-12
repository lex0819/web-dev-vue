new Vue({
    el: '#app',
    data: {
        items: [
            { id: 1, name: 'item01' },
            { id: 2, name: 'item02' },
            { id: 3, name: 'item03' },
        ],
    },
    methods: {
        reverseBtn(event) {
            const nameBtn = event.target.textContent;
            event.target.textContent = nameBtn.split('').reverse().join('');
        },
        addItem() {
            this.items.push({
                id: this.items.length + 1,
                name: 'Новый элемент списка',
            });
        },
        removeItem(itemId) {
            // console.log(this.items.length);
            // console.log(itemId);
            this.items.splice(itemId - 1, 1);
        },
    },
});
