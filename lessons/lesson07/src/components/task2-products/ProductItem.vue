<template>
    <div class="row p-2">
        <div class="col col-1">{{ product.id }}</div>
        <div class="col col-6">{{ product.title }}</div>
        <div class="col col-2">{{ product.price }}</div>
        <button
            @click="addToCart(product)"
            class="btn btn-success col col-3"
            :disabled="product.inCart"
        >
            add to cart
        </button>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: {
        product: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    methods: {
        addToCart(product) {
            this.$emit('addToCart', product);
        },
    },
};
</script>
