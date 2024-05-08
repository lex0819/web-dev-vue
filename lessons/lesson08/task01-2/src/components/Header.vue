<template>
    <div>
        <header class="header">
            <nav>
                <ul class="header__menu">
                    <li class="header__menu_item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="header__menu_item">
                        <router-link to="/about">About</router-link>
                    </li>
                    <li class="header__menu_item">
                        <router-link to="/contacts">Contacts</router-link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
import router from 'vue-router';

export default {
    name: 'Header',

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>
<style lang="scss">
a {
    text-decoration: none;
    font: inherit;
    color: inherit;
}
ul,
li {
    list-style-type: none;
}
.header {
    &__menu {
        display: flex;
        justify-content: center;
        gap: 30px;
        align-items: center;
        &_item {
            color: navy;
            font-size: 20px;
            font-weight: normal;
            &:hover {
                color: greenyellow;
            }
        }
    }
}
</style>
