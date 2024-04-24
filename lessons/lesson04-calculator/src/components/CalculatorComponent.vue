<template>
    <div class="wrap">
        <h2>Calculator</h2>
        <div class="calculator">
            <div class="enter">
                <input type="text" class="input button" v-model="result" />
                <button
                    v-for="(char, index) in chars"
                    :key="index"
                    class="btn btn-primary"
                    @click="addChar(char)"
                >
                    {{ char }}
                </button>
                <button class="btn btn-secondary reset" @click="result = ''">
                    reset
                </button>
            </div>
            <div class="operation">
                <button
                    v-for="(operation, index) in operations"
                    :key="index"
                    class="btn btn-warning"
                    @click="addChar(operation)"
                >
                    {{ operation }}
                </button>
                <button class="btn btn-success equal" @click="getResult">
                    OK
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CalculatorComponent',

    data() {
        return {
            result: '',
            chars: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
            operations: ['+', '-', '*', '/'],
        };
    },

    methods: {
        addChar(char) {
            this.result += char;
        },
        getResult() {
            this.result = eval(this.result);
        },
    },
};
</script>
<style lang="scss" scoped>
.wrap {
    max-width: 760px;
    margin: 0 auto;
    margin-top: 50px;
}
.calculator {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    gap: 10px;
}
.enter {
    grid-column: 1 / 4;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 10px;
}
.reset {
    grid-column: 2 / 4;
}
.input {
    grid-column: 1 / 4;
    text-align: right;
}

.operation {
    grid-column: 4 / 6;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 10px;
}
.equal {
    grid-column: 1 / 3;
}
</style>
