<template>
    <div id="app" class="container">
        <!-- <h2 class="mt-4">Counter</h2>
        <CountComp :count="count" @decrease="decrease" @increase="increase" /> -->
        <h2 class="mt-4">Products list and Cart</h2>
        <div class="row">
            <div class="col col-lg-6 col-sm-12">
                <CartList />
            </div>
            <div class="col col-lg-6 col-sm-12">
                <ProductsList />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
// import CountComp from '@/components/CountComp';
import ProductsList from '@/components/task2-products/ProductsList';
import CartList from '@/components/task2-products/CartList';

export default {
    name: 'App',
    components: {
        // CountComp,
        ProductsList,
        CartList,
    },
    methods: {
        ...mapMutations(['INCREASE', 'DECREASE']),
        decrease() {
            this.DECREASE();
        },
        increase() {
            this.INCREASE();
        },
    },
    computed: {
        ...mapState(['count']),
    },
};
</script>

<style lang="scss"></style>
