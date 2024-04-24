<template>
    <div class="product">
        <h4>{{ product.title }}</h4>
        <p>{{ product.desc }}</p>
        <p>{{ product.price }}</p>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: ['product'],
    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped>
.product {
    display: flex;
    gap: 20px;
    border-bottom: 1px solid black;
    padding: 10px 50px;
}
</style>
