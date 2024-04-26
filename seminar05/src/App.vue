<template>
    <div id="app">
        <ProductList :products="products" />
    </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
    name: 'App',
    components: {
        ProductList,
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
                    available: true,
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque accusamus animi exercitationem est libero sequi! Error modi cupiditate maiores unde voluptatum itaque at nam sunt, ipsum illum sequi a id.',
                },
                {
                    id: 1,
                    name: 'boots',
                    price: 150,
                    available: false,
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque accusamus animi exercitationem est libero sequi! Error modi cupiditate maiores unde voluptatum itaque at nam sunt, ipsum illum sequi a id.',
                },
                {
                    id: 2,
                    name: 'hat',
                    price: 50,
                    available: true,
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque accusamus animi exercitationem est libero sequi! Error modi cupiditate maiores unde voluptatum itaque at nam sunt, ipsum illum sequi a id.',
                },
                {
                    id: 3,
                    name: 'hat',
                    price: 170,
                    available: true,
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque accusamus animi exercitationem est libero sequi! Error modi cupiditate maiores unde voluptatum itaque at nam sunt, ipsum illum sequi a id.',
                },
                {
                    id: 4,
                    name: 'hat',
                    price: 250,
                    available: false,
                    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque accusamus animi exercitationem est libero sequi! Error modi cupiditate maiores unde voluptatum itaque at nam sunt, ipsum illum sequi a id.',
                },
            ];
        },
    },
    created() {
        this.products = this.fetchData();
    },
};
</script>

<style></style>
