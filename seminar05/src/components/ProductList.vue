<template>
    <div class="container mt-5">
        <h2>Products list</h2>
        <h5 class="row p-2 mt-3">
            <div class="col">name</div>
            <div class="col">price</div>
            <div class="col">available</div>
            <div class="col">show description</div>
        </h5>
        <ul>
            <li v-for="product in products" :key="product.id" class="row p-2">
                <ProductItem :product="product" />
            </li>
        </ul>
    </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
    name: 'ProductList',
    components: {
        ProductItem,
    },
    props: ['products'],

    data() {
        return {};
    },
};
</script>
