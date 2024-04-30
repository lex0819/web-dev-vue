<template>
    <div id="app">
        <header>
            <h1>My personal costs</h1>
        </header>
        <main>
            <AddPaymentForm />
            <PaymentsDisplay />
        </main>
    </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay';
import AddPaymentForm from '@/components/AddPaymentForm';
import { mapMutations } from 'vuex';

export default {
    name: 'App',
    components: {
        PaymentsDisplay,
        AddPaymentForm,
    },
    data() {
        return {
            show: true,
            paymentsList: [],
        };
    },
    methods: {
        ...mapMutations({ addPayment: 'setPaymentsListData' }),
        fetchData() {
            return [
                {
                    date: '28.03.2020',
                    category: 'Food',
                    value: 169,
                },
                {
                    date: '24.03.2020',
                    category: 'Transport',
                    value: 360,
                },
                {
                    date: '24.03.2020',
                    category: 'Food',
                    value: 532,
                },
            ];
        },
        // addNewPayment(data) {
        //     this.paymentsList = [...this.paymentsList, data];
        // },
    },
    created() {
        //call mutation
        // this.$store.commit('setPaymentsListData', this.fetchData());
        this.addPayment(this.fetchData());
    },
};
</script>

<style></style>
