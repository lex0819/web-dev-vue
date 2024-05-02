<template>
    <div class="row p-2">
        <div class="col col-1">{{ item.id }}</div>
        <div class="col col-5">{{ item.title }}</div>
        <div class="col col-2">{{ item.price }}</div>
        <input
            type="number"
            v-model.number="count"
            @input="setCount(item.id, count)"
            @keyup="setMin"
            min="1"
            class="col col-2"
        />
        <button @click="remove(item.id)" class="btn btn-danger col col-2">
            remove
        </button>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        item: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    data() {
        return { count: this.item.count };
    },
    methods: {
        remove(id) {
            this.$emit('removeItem', id);
        },
        setCount(id, count) {
            const payload = {
                id: id,
                count: count,
            };
            this.$emit('count', payload);
        },
        setMin() {
            if (this.count < 1) {
                this.count = 1;
            }
        },
    },
};
</script>
