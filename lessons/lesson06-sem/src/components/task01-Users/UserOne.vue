<template>
    <div class="mt-2">
        <div class="row">
            <p class="col col-3">id: {{ user.id }}</p>
            <h4 class="col col-9">name: {{ user.name }}</h4>
        </div>
        <div class="row">
            <p class="col">username: {{ user.username }}</p>
            <p class="col">email: {{ user.email }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserOne',
    props: {
        user: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    data() {
        return {};
    },
};
</script>
