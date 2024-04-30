<template>
    <div>
        <input type="number" placeholder="Amount" v-model.number="value" />
        <input type="text" placeholder="category" v-model.trim="category" />
        <input type="text" placeholder="Date" v-model="date" />
        <button @click="onSaveClick">Save!</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'AddPaymentForm',

    data() {
        return {
            value: '',
            category: '',
            date: '',
        };
    },
    computed: {
        getCurrentDate() {
            const today = new Date();
            const d = today.getDate();
            const m = today.getMonth() + 1;
            const y = today.getFullYear();
            return `${d}.${m}.${y}`;
        },
    },
    methods: {
        ...mapMutations({ addPay: 'addDataToPaymentsList' }),
        onSaveClick() {
            const data = {
                date: this.date || this.getCurrentDate,
                category: this.category,
                value: Number(this.value),
            };
            // console.log(data);
            // this.$store.commit('addDataToPaymentsList', data);
            // this.$emit('addNewPayment', data);
            this.addPay(data);
            this.value = '';
            this.category = '';
            this.date = '';
        },
    },
};
</script>
