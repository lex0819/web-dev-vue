<template>
    <div id="app">
        <CalcFunc />
        <AuthComp />
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
            products: [],
        };
    },
    methods: {
        fetchData() {
            return [
                {
                    id: 0,
                    name: 'shirt',
                    price: 100,
                    count: 2,
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque accusamus animi exercitationem est libero sequi! Error modi cupiditate maiores unde voluptatum itaque at nam sunt, ipsum illum sequi a id.',
                },
                {
                    id: 1,
                    name: 'boots',
                    price: 150,
                    count: 3,
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque accusamus animi exercitationem est libero sequi! Error modi cupiditate maiores unde voluptatum itaque at nam sunt, ipsum illum sequi a id.',
                },
                {
                    id: 2,
                    name: 'hat',
                    price: 50,
                    count: 1,
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque accusamus animi exercitationem est libero sequi! Error modi cupiditate maiores unde voluptatum itaque at nam sunt, ipsum illum sequi a id.',
                },
            ];
        },
    },
    created() {
        this.products = this.fetchData();
        this.isAuthenticated = false;
    },
    mounted() {
        // setTimeout(() => {
        //     this.isAuthenticated = true;
        // }, 7000);
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
