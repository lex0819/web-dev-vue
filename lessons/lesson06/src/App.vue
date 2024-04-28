<template>
    <div id="app">
        <header>
            <div>My personal costs</div>
        </header>
        <main>
            <PaymentsDisplay />
            <AddPaymentForm @addNewPayment="addNewPayment" />
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
            paymentsList: [],
        };
    },
    methods: {
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
        addNewPayment(data) {
            this.paymentsList = [...this.paymentsList, data];
        },
        ...mapMutations({
            updatePayments: 'setPaymentsListData',
        }),
    },
    created() {
        this.$store.commit('setPaymentsListData', this.fetchData());
        // this.setPaymentsListData(this.fetchData());
    },
};
</script>

<style></style>
