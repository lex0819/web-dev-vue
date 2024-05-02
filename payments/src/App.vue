<template>
    <div id="app">
        <div class="container">
            <header>
                <h1>My personal costs</h1>
            </header>
            <main>
                <AddPaymentForm @addNewPayment="addNewPayment" />
                <PaymentsDisplay :items="paymentsList" />
            </main>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
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
            show: true,
            // paymentsList: [], берем из vuex state
        };
    },
    methods: {
        // fetchData() {
        //     return [
        //         {
        //             date: '28.03.2020',
        //             category: 'Food',
        //             value: 169,
        //         },
        //         {
        //             date: '24.03.2020',
        //             category: 'Transport',
        //             value: 360,
        //         },
        //         {
        //             date: '24.03.2020',
        //             category: 'Food',
        //             value: 532,
        //         },
        //     ];
        // },
        addNewPayment(data) {
            // this.paymentsList = [...this.paymentsList, data];
            // this.paymentsList.push(data);
            this.ADD_PAY(data);
        },
        ...mapMutations(['SET_PAYMENTS', 'ADD_PAY']),
    },
    computed: {
        //как бы объявляем массив данных paymentsList
        ...mapState(['paymentsList']),
        //regestry getters
        ...mapGetters(['getPayments', 'getFullPayments']),
        ...mapActions(['fetchData']),
    },
    created() {
        // this.paymentsList = this.fetchData(); заполняем state
        // fetchData уже берем из vuex actions
        this.SET_PAYMENTS(this.fetchData);
    },
};
</script>

<style lang="scss"></style>
