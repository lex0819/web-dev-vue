<template>
    <div id="app">
        <ImageGallery :images="images" />
        <CalculatorComponent />
        <ProductList :products="products" />
    </div>
</template>

<script>
import CalculatorComponent from './components/CalculatorComponent';
import ImageGallery from './components/ImageGallery';
import ProductList from './components/ProductList';

export default {
    name: 'App',
    components: {
        CalculatorComponent,
        ImageGallery,
        ProductList,
    },
    data() {
        return {
            images: [
                {
                    id: 0,
                    src: 'https://images.elenivan.ru/jpg/1536x864_1666771943733.jpg',
                },
                {
                    id: 1,
                    src: 'https://images.elenivan.ru/jpg/1536x864_1666772102478.jpeg',
                },
                {
                    id: 2,
                    src: 'https://images.elenivan.ru/jpg/1536x864_1666772147314.jpeg',
                },
                {
                    id: 3,
                    src: 'https://images.elenivan.ru/jpg/1536x864_1666772187758.jpeg',
                },
                {
                    id: 4,
                    src: 'https://images.elenivan.ru/jpg/architecture-sky-town-building.jpeg',
                },
            ],
            products: [
                {
                    id: 0,
                    title: 'iPhone X',
                    desc: 'Wow!',
                    price: 1000,
                },
                {
                    id: 1,
                    title: 'iPhone 15',
                    desc: 'Very good!',
                    price: 2500,
                },
                {
                    id: 2,
                    title: 'iPhone 12',
                    desc: 'Excellent!',
                    price: 1700,
                },
                {
                    id: 3,
                    title: 'iPhone 14',
                    desc: 'So cute!',
                    price: 2100,
                },
                {
                    id: 4,
                    title: 'iPhone 11',
                    desc: 'Hello!',
                    price: 1600,
                },
            ],
        };
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
img {
    width: 100%;
}
ul,
li {
    list-style-type: none;
}
</style>
