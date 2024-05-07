<template>
    <div class="mt-3">
        <h3>Enter new product</h3>
        <AddNewProduct @setNewProduct="addNewProduct" />
        <h3 class="mt-1">Products</h3>
        <ul class="list-group mt-2">
            <li
                v-for="product in productsList"
                :key="product.id"
                class="list-group-item"
            >
                <ProductItem :product="product" @addToCart="addToCard" />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import ProductItem from '@/components/task2-products/ProductItem';
import AddNewProduct from '@/components/task2-products/AddNewProduct';

export default {
    name: 'ProductsList',
    components: {
        ProductItem,
        AddNewProduct,
    },
    methods: {
        ...mapMutations([
            'SET_PRODUCTS',
            'ADD_ITEM_TO_CART',
            'SET_ENABLE_PRODUCT',
            'ADD_NEW_PRODUCT',
        ]),
        addToCard(product) {
            this.ADD_ITEM_TO_CART(product);
            this.SET_ENABLE_PRODUCT(product.id);
        },
        addNewProduct(product) {
            this.ADD_NEW_PRODUCT(product);
        },
    },
    computed: {
        ...mapState(['productsList']),
        ...mapActions(['fetchProducts']),
    },
    created() {
        this.SET_PRODUCTS(this.fetchProducts);
    },
};
</script>
