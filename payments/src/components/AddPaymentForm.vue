<template>
    <div class="mt-5">
        <input type="number" placeholder="Amount" v-model.number="value" />
        <input type="text" placeholder="category" v-model.trim="category" />
        <input type="text" placeholder="Date" v-model="date" />
        <button @click="onSaveClick">Save!</button>
    </div>
</template>

<script>
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
        onSaveClick() {
            const data = {
                date: this.date || this.getCurrentDate,
                category: this.category,
                value: Number(this.value),
            };
            this.$emit('addNewPayment', data);
            this.value = '';
            this.category = '';
            this.date = '';
        },
    },
};
</script>
