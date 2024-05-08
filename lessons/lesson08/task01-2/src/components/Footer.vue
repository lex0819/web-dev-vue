<template>
    <div>
        <footer class="footer">
            <nav>
                <ul class="footer__menu">
                    <li class="footer__menu_item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="footer__menu_item">
                        <router-link to="/about">About</router-link>
                    </li>
                    <li class="footer__menu_item">
                        <router-link to="/contacts">Contacts</router-link>
                    </li>
                </ul>
            </nav>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer',

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>
<style lang="scss">
.footer {
    background-color: lightgreen;
    &__menu {
        display: flex;
        gap: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &_item {
            color: darkgreen;
            font-size: 26px;
            font-weight: normal;
            &:hover {
                font-weight: bold;
            }
        }
    }
}
</style>
