<template>
    <div>
        <button class="btn btn-primary" @click="decrease">-</button>
        <span> {{ count }} </span>
        <button class="btn btn-primary" @click="increase">+</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'CountComp',
    mounted() {
        // console.log(this.$store);
    },
    methods: {
        ...mapMutations(['INCREASE', 'DECREASE']),
        decrease() {
            // this.$store.commit('DECREASE');
            this.DECREASE();
            // this.$emit('decrease');
        },
        increase() {
            // this.$store.commit('INCREASE');
            this.INCREASE();
            // this.$emit('increase');
        },
    },
    computed: {
        ...mapState(['count']),
    },
};
</script>
