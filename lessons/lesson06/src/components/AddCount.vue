<template>
    <div>
        <h2>Very cool counter</h2>
        <button @click="upCounter">Counter's value is {{ count }}</button>
    </div>
</template>

<script>
export default {
    name: 'AddCount',

    data() {
        return {
            count: 0,
        };
    },

    mounted() {},

    methods: {
        upCounter() {
            this.count++;
        },
    },
};
</script>
