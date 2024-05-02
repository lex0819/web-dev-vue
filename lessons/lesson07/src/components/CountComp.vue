<template>
    <div>
        <button class="btn btn-primary" @click="decrease">-</button>
        <input type="number" :value="count" />
        <button class="btn btn-primary" @click="increase">+</button>
    </div>
</template>

<script>
export default {
    name: 'CountComp',
    props: {
        count: {
            type: Number,
            default: () => {
                return 0;
            },
        },
    },
    methods: {
        decrease() {
            this.$emit('decrease');
        },
        increase() {
            this.$emit('increase');
        },
    },
};
</script>
