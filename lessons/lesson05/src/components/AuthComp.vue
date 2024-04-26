<template>
    <div class="container">
        <h2 class="mt-5">Authentication</h2>
        <div v-if="!isAuth">
            <h5 class="mt-3">Enter you credentials</h5>
            <form action="#" class="form mt-3">
                <label class="row p-2">
                    <span class="col">name</span>
                    <input
                        type="text"
                        name="name"
                        required
                        class="col"
                        v-model.trim="userLogin"
                    />
                </label>
                <label class="row p-2">
                    <span class="col">password</span>
                    <input
                        type="password"
                        name="password"
                        required
                        class="col"
                        v-model.trim="userPassword"
                    />
                </label>
                <button class="btn btn-success mt-2" @click="formCheck">
                    OK
                </button>
            </form>
        </div>
        <div v-else>
            <h5 class="mt-3">сообщение об успешной аутентификации</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AuthComp',
    data() {
        return {
            isAuth: false,
            userLogin: '',
            userPassword: '',
        };
    },

    methods: {
        formCheck() {
            if (this.userLogin && this.userPassword) {
                this.isAuth = true;
            }
        },
    },
};
</script>
