<template>
    <div class="products">
        <h3>Products list</h3>
        <div class="products__sort">
            <button type="button" @click="sortUp" class="btn btn-info">
                ASC
            </button>
            <button type="button" @click="sortDown" class="btn btn-info">
                DESC
            </button>
            <button type="button" @click="sortReset" class="btn btn-info">
                RESET
            </button>
        </div>
        <ul class="products__list">
            <li
                class="products__item"
                v-for="product in sortProducts"
                :key="product.id"
            >
                <ProductItem :product="product" />
            </li>
        </ul>
    </div>
</template>

<script>
import ProductItem from './ProductItem';

export default {
    name: 'ProductList',
    components: {
        ProductItem,
    },
    props: ['products'],
    data() {
        return {
            sortDirection: '',
        };
    },

    mounted() {},

    methods: {
        sortUp() {
            this.sortDirection = 'up';
        },
        sortDown() {
            this.sortDirection = 'down';
        },
        sortReset() {
            this.sortDirection = '';
        },
    },
    computed: {
        sortProducts() {
            const copyProducts = [...this.products];
            switch (this.sortDirection) {
                case 'up':
                    return copyProducts.sort((a, b) => a.price - b.price);
                case 'down':
                    return copyProducts.sort((a, b) => b.price - a.price);
                default:
                    return this.products;
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.products {
    margin-top: 50px;
    &__sort {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
    &__list {
        margin-top: 50px;
    }
}
</style>
