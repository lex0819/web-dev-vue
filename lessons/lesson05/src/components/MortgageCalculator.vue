<template>
    <div class="container mt-5">
        <h2>Mortgage Calculator</h2>
        <div class="mt-3">
            <label class="row p-2">
                <span class="col">Enter Amount of Credit</span>
                <input
                    class="col"
                    type="text"
                    v-model.number="amountCredit"
                    placeholder="amount Credit"
                />
            </label>
            <label class="row p-2">
                <span class="col">Enter interest Rate %</span>
                <input
                    class="col"
                    type="text"
                    v-model.number="interestRate"
                    placeholder="interest Rate"
                />
            </label>
            <label class="row p-2">
                <span class="col">Enter how many month</span>
                <input
                    class="col"
                    type="text"
                    v-model.number="creditTerm"
                    placeholder="credit Term"
                />
            </label>
            <h5 class="mt-3 alert alert-success">
                Monthly Payment is <strong>{{ monthlyPayment }}</strong>
            </h5>
            <h5 class="mt-3 alert alert-success">
                Total Payment is <strong>{{ totalPayment }}</strong>
            </h5>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MortgageCalculator',

    data() {
        return {
            amountCredit: '',
            interestRate: '',
            creditTerm: '',
        };
    },

    computed: {
        monthlyPayment() {
            const monthlyPercent = +this.interestRate / 12 / 100;

            const annuityCoefficient =
                (monthlyPercent *
                    Math.pow(1 + monthlyPercent, +this.creditTerm)) /
                (Math.pow(1 + monthlyPercent, +this.creditTerm) - 1);

            return (
                Math.round(+this.amountCredit * annuityCoefficient * 100) /
                    100 || 0
            );
        },
        totalPayment() {
            return this.monthlyPayment * this.creditTerm;
        },
    },
};
</script>

<style scoped></style>
