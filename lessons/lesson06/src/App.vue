<template>
    <div id="app">
        <header>
            <div>My personal costs</div>
        </header>
        <main>
            <PaymentsDisplay :items="paymentsList" />
            <AddPaymentForm @addNewPayment="addNewPayment" />
        </main>
    </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay';
import AddPaymentForm from '@/components/AddPaymentForm';

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
    },
    created() {
        this.paymentsList = this.fetchData();
    },
};
</script>

<style></style>
