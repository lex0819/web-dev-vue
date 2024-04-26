<template>
    <div id="app">
        <CalcFunc />
        <AuthComp :isAuthenticated="isAuthenticated" />
        <CardList :products="products" />
        <MortgageCalculator />
    </div>
</template>

<script>
import CalcFunc from '@/components/CalcFunc';
import AuthComp from '@/components/AuthComp';
import CardList from '@/components/CardList';
import MortgageCalculator from '@/components/MortgageCalculator';

export default {
    name: 'App',
    components: {
        CalcFunc,
        AuthComp,
        CardList,
        MortgageCalculator,
    },
    data() {
        return {
            isAuthenticated: true,
            products: [
                {
                    name: 'shirt',
                    price: 100,
                    count: 2,
                },
                {
                    name: 'boots',
                    price: 150,
                    count: 3,
                },
                {
                    name: 'hat',
                    price: 50,
                    count: 1,
                },
            ],
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
