<template>
    <div>
        <div v-for="item in getItems" :key="item.id">
            <div class="content">
                <div class="content__item">{{ item.date }}</div>
                <div class="content__item">{{ item.category }}</div>
                <div class="content__item">{{ item.value }}</div>
            </div>
        </div>
        <div v-if="getFPV">Total: {{ getFPV }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'PaymentsDisplay',
    // props: {
    //     items: {
    //         type: Array,
    //         default: () => {
    //             return [];
    //         },
    //     },
    // },
    data() {
        return {};
    },
    methods: {},
    computed: {
        ...mapGetters({ allList: 'getPaymentsList' }),
        getFPV() {
            return this.$store.getters.getFullPaymentValue;
        },
        getItems() {
            // return this.$store.getters.getPaymentsList;
            return this.allList;
        },
    },
};
</script>
<style scoped>
.content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
.content__item {
    padding: 8px 16px;
    border: 1px solid #ccc;
}
</style>
