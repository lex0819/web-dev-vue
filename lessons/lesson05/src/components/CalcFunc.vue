<template>
    <div>
        <h2>Calculator Lesson 5</h2>
        <input type="text" v-model="operand1" />
        <input type="text" v-model="operand2" />
        {{ result }}
        <div>
            <button
                v-for="(operation, index) in operations"
                :key="index"
                @click="calcAllResult(operation)"
            >
                {{ operation }}
            </button>
        </div>
        <div v-show="error">
            {{ error }}
        </div>
        <div>
            <template v-if="result < 0"> The result is negative </template>
            <template v-if="result >= 0 && result <= 100">
                The result is ordinary number
            </template>
            <template v-if="result > 100"> The result is too much </template>
        </div>
        <div>
            <h3>Fibonacci's numbers</h3>
            <p>Fibonacci's number for first operand is {{ fib1 }}</p>
            <p>Fibonacci's number for second operand is {{ fib2 }}</p>
        </div>
        <div v-show="Object.keys(logs).length > 0">
            <h3>Operation's history</h3>
            <div v-for="(log, index) in logs" :key="index">
                {{ log }}
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    name: 'CalcFunc',

    data() {
        return {
            operand1: 0,
            operand2: 0,
            result: 0,
            operations: ['+', '-', '*', '/'],
            error: '',
            logs: {},
        };
    },

    mounted() {},

    methods: {
        add() {
            this.result = Number(this.operand1) + Number(this.operand2);
        },
        minus() {
            this.result = Number(this.operand1) - Number(this.operand2);
        },
        mult() {
            this.result = Number(this.operand1) * Number(this.operand2);
        },
        div() {
            const { operand1, operand2 } = this;
            if (operand2 === 0) {
                this.error = 'Error! Divider by zero!';
            } else {
                this.result = Number(operand1) / Number(operand2);
            }
        },
        calcAllResult(operation = '+') {
            this.error = '';
            switch (operation) {
                case '+':
                    this.add();
                    break;
                case '-':
                    this.minus();
                    break;
                case '*':
                    this.mult();
                    break;
                case '/':
                    this.div();
                    break;
            }
            // this.logs[
            //     Date.now()
            // ] = `${this.operand1}${operation}${this.operand2}=${this.result}`;
            //instead Vue.set()
            const key = Date.now();
            const value = `${this.operand1}${operation}${this.operand2}=${this.result}`;
            Vue.set(this.logs, key, value);
        },
        fib(n) {
            return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
        },
    },
    computed: {
        fib1() {
            return this.fib(this.operand1);
        },
        fib2() {
            return this.fib(this.operand2);
        },
    },
};
</script>

<style lang="scss" scoped></style>
