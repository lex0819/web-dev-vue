<template>
    <div class="container mt-5">
        <h2>Products list</h2>
        <h5 class="row p-2 mt-3">
            <div class="col">name</div>
            <div class="col">price</div>
            <div class="col">count</div>
            <div class="col">
                <strong>Subtotal</strong>
            </div>
        </h5>
        <ul>
            <li
                v-for="(product, index) in products"
                :key="index"
                class="row p-2"
            >
                <div class="col">{{ product.name }}</div>
                <div class="col">{{ product.price }}</div>
                <input
                    class="col"
                    type="text"
                    v-model.number="product.count"
                    @input="setSubtotal(index)"
                />
                <div class="col">
                    <strong>Subtotal: {{ subtotals[index] }}</strong>
                </div>
            </li>
        </ul>
        <h4>Total price: {{ total }}</h4>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'CardList',
    props: ['products'],

    data() {
        return {
            subtotals: [],
        };
    },
    mounted() {
        this.subtotals = this.products.map((it) => it.price * it.count);
    },
    methods: {
        setSubtotal(index) {
            Vue.set(
                this.subtotals,
                index,
                this.products[index].price * this.products[index].count
            );
        },
    },
    computed: {
        total() {
            return this.products.reduce((ac, it) => {
                return ac + it.price * it.count;
            }, 0);
        },
    },
};
</script>
<style scoped></style>
