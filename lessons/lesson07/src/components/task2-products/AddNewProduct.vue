<template>
    <div class="row">
        <input
            type="text"
            v-model.trim="title"
            class="col col-8"
            placeholder="product title"
        />
        <input
            type="number"
            v-model.number="price"
            class="col col-3"
            placeholder="product price"
        />
        <button @click="addNewProduct" class="btn btn-success col col-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-file-plus"
                viewBox="0 0 16 16"
            >
                <path
                    d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5z"
                />
                <path
                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"
                />
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    name: 'AddNewProduct',

    data() {
        return {
            title: '',
            price: null,
        };
    },
    methods: {
        addNewProduct() {
            const date = new Date();
            const id = date.getTime();
            const newProduct = {
                id,
                title: this.title,
                price: this.price,
            };
            this.title = '';
            this.price = null;
            this.$emit('setNewProduct', newProduct);
        },
    },
};
</script>
