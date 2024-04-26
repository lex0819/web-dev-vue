<template>
    <div>
        <div class="product">
            <div>{{ product.name }}</div>
            <div>{{ product.price }}</div>
            <!-- <input type="text" v-model="product.count" /> -->
        </div>
        <div>Subtotal: {{ subtotal }}</div>
    </div>
</template>

<script>
export default {
    name: 'CardItem',
    props: ['product'],

    data() {
        return {};
    },

    methods: {},
    computed: {
        subtotal() {
            return this.product.price * this.product.count;
        },
    },
};
</script>
<style scoped>
.product {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
}
</style>
