<template>
    <div>
        <div v-if="!isAuthenticated">
            <h3>Enter you credentials</h3>
            <form action="">
                <input type="text" name="name" required />
                <input type="password" name="password" required />
                <button type="submit">OK</button>
            </form>
        </div>
        <div v-else>
            <h3>сообщение об успешной аутентификации</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AuthComp',
    props: ['isAuthenticated'],
    data() {
        return {};
    },

    methods: {},
};
</script>
