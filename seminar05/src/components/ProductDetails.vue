<template>
    <div class="row">
        <strong class="col">{{ formattedPrice }}</strong>
        <span class="col-9">{{ product.desc }}</span>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',
    props: ['product'],

    data() {
        return {
            currencyCourse: 10,
        };
    },
    computed: {
        priceCurrency() {
            return this.product.price / this.currencyCourse;
        },
        formattedPrice() {
            return `$${Math.round(this.priceCurrency * 100) / 100}`;
        },
    },
};
</script>
