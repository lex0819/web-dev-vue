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
            <div class="col">show description</div>
        </h5>
        <ul>
            <li v-for="product in products" :key="product.id" class="row p-2">
                <div class="row p-2">
                    <div class="col">{{ product.name }}</div>
                    <div class="col">{{ product.price }}</div>
                    <input
                        class="col"
                        type="number"
                        v-model.number="product.count"
                    />
                    <div class="col">
                        <strong>{{ product.count * product.price }}</strong>
                    </div>
                    <input
                        type="checkbox"
                        @change="toggleDescription(product.id)"
                        class="col"
                    />
                </div>
                <div class="col" v-if="showDescription.includes(product.id)">
                    {{ product.desc }}
                </div>
            </li>
        </ul>
        <h4>Total price: {{ total }}</h4>
    </div>
</template>

<script>
export default {
    name: 'CardList',
    props: ['products'],

    data() {
        return {
            showDescription: [],
        };
    },
    mounted() {},
    methods: {
        toggleDescription(id) {
            const ind = this.showDescription.indexOf(id);
            if (ind !== -1) {
                this.showDescription.splice(ind, 1);
            } else {
                this.showDescription.push(id);
            }
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
