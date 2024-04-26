<template>
    <div>
        <div class="row p-2">
            <div class="col">{{ product.name }}</div>
            <div class="col">{{ product.price }}</div>
            <div class="col" v-if="product.available">
                <strong>Available</strong>
            </div>
            <div class="col" v-else>
                <strong>Out of stock</strong>
            </div>
            <input
                type="checkbox"
                @change="showDescription = !showDescription"
                class="col"
            />
        </div>
        <ProductDetails :product="product" v-if="showDescription" />
    </div>
</template>

<script>
import ProductDetails from '@/components/ProductDetails.vue';

export default {
    name: 'ProductItem',
    props: ['product'],
    components: {
        ProductDetails,
    },
    data() {
        return {
            showDescription: false,
        };
    },
};
</script>
