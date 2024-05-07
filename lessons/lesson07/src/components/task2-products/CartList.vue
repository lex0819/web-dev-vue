<template>
    <div class="mt-3">
        <h3 class="mt-3">Cart</h3>
        <ul class="list-group mt-2 mb-2">
            <li
                v-for="item in cartItems"
                :key="item.id"
                class="list-group-item"
            >
                <CartItem
                    :item="item"
                    @removeItem="remove"
                    @count="setCountItem"
                />
            </li>
        </ul>
        <p class="p-3">
            Total items is
            <span class="alert alert-primary">{{ getTotalItems }}</span>
        </p>
        <p class="p-3">
            Total price is
            <span class="alert alert-success">{{ getTotalPrice }}</span>
        </p>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import CartItem from '@/components/task2-products/CartItem';

export default {
    name: 'CartList',
    components: {
        CartItem,
    },
    methods: {
        ...mapMutations([
            'SET_CART',
            'REMOVE_ITEM_FROM_CART',
            'CHANGE_ITEM_COUNT_IN_CART',
            'SET_ENABLE_PRODUCT',
        ]),
        remove(id) {
            this.REMOVE_ITEM_FROM_CART(id);
            this.SET_ENABLE_PRODUCT(id);
        },
        setCountItem(payload) {
            this.CHANGE_ITEM_COUNT_IN_CART(payload);
        },
    },
    computed: {
        ...mapState(['cartItems']),
        getTotalItems() {
            return this.$store.getters.totalItems;
        },
        getTotalPrice() {
            return this.$store.getters.totalPrice.toFixed(2);
        },
    },
    created() {
        this.$store.getters.cartItems;
    },
};
</script>
