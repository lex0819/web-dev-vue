<template>
    <div>
        <ul class="product-list">
            <li v-for="product in paginatedCatalog" :key="product.id">
                {{ product.title }} {{ product.price }}
            </li>
        </ul>
        <nav>
            <ul class="pagination">
                <!-- <li
                    v-for="page in totalPages"
                    :key="page"
                    @click="goToPage(page)"
                > -->
                <li v-for="page in totalPages" :key="page">
                    <!-- ссылка <a></a> вместо обработки клика -->
                    <router-link :to="`/catalog/${page}`">
                        {{ page }}
                    </router-link>
                </li>
            </ul>
        </nav>
        <!-- example by click instead native link tag <a> <div
            class="wrapper"
            v-for="route in $store.state.menuItems"
            :key="route.name"
            @click="dropClick"
        >
            <router-link
                :to="{ name: 'docs', params: { title: route.name } }"
            >
                <i :class="'ico ri ' + route.icon"></i> {{ route.name }}
            </router-link>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'Catalog',

    data() {
        return {
            products: [],
            perPage: 5, // limit param in URL
            // currentPage: 1,
        };
    },

    mounted() {
        // const page = this.$route.params.page;
        // if (page) {
        //     this.currentPage = +page;
        // }
    },
    created() {
        this.fetchProducts();
    },
    methods: {
        fetchProducts() {
            fetch('https://fakestoreapi.com/products')
                .then((response) => {
                    return response.json();
                })
                .then((json) => (this.products = json))
                .catch((er) => console.log(er.message));
        },
        // goToPage(page) {
        //     this.currentPage = page;
        // },
    },
    computed: {
        currentPage() {
            //получаем текущую страницу прямо из роутера
            return this.$route.params.page || 1;
        },
        totalPages() {
            return Math.ceil(this.products.length / this.perPage);
        },
        paginatedCatalog() {
            const { currentPage, perPage } = this;
            const startIndexProduct = (currentPage - 1) * perPage;
            const endIndex = startIndexProduct + perPage;
            return this.products.slice(startIndexProduct, endIndex);
        },
    },
};
</script>
<style lang="scss">
ul,
li {
    list-style-type: none;
}
.product {
    &-list {
        text-align: left;
    }
}
.pagination {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
}
</style>
