// Вам необходимо создать компонент "Товар", который будет отображать информацию о товаре, включая название, описание и цену. Кроме того, вы должны реализовать фильтрацию товаров по цене (по возрастанию и убыванию)
// 1. Создайте компонент "Товар", который вы создавали в интернет- магазине BRAND
// 2. Создайте список товаров, используя компонент "Товар". Данные о товарах могут быть представлены в виде массива объектов.
// 3. Добавьте две кнопки сортировки (по убыванию, по возрастанию)
// 4. При нажатии на кнопки, обновите список отображаемых товаров, отфильтрованных по цене.

Vue.component('products', {
    props: ['products'],
    data() {
        return {
            sortDirection: '',
        };
    },
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
    template: `
    <div class="products">
        <h3>Products list</h3>
        <div class="products__sort">
            <button 
                type="button" 
                @click="sortUp"
                class="btn btn-info">
                ASC
            </button>
            <button 
                type="button" 
                @click="sortDown"
                class="btn btn-info">
                DESC
            </button>
            <button 
                type="button" 
                @click="sortReset"
                class="btn btn-info">
                RESET
            </button>
        </div>
        <ul class="products__list">
            <li 
                class="products__item"
                v-for="product in sortProducts"
                :key="product.id">
                <product 
                    :product="product">
                </product>
            </li>
        </ul>
    </div>
    `,
});

Vue.component('product', {
    props: ['product'],
    data() {
        return {};
    },
    methods: {},
    computed: {},
    template: `
    <div class="product card mt-2">
        <h4>{{product.title}}</h4>
        <p>{{product.desc}}</p>
        <p>{{product.price}}</p>
    </div>
    `,
});
