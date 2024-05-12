<template>
    <div>
        <div>
            <h3>Author: {{ theUser.name }}</h3>
            <p>phone: {{ theUser.phone }}</p>
            <p>email: {{ theUser.email }}</p>
            <p>website: {{ theUser.website }}</p>
            <p>
                address: {{ theUser.address.city }} {{ theUser.address.street }}
            </p>
            <p>company: {{ theUser.company.name }}</p>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

export default {
    name: 'UserOwner',
    props: {
        user: {
            type: Number,
            default: () => {
                return null;
            },
        },
    },
    data() {
        return {};
    },
    methods: {
        ...mapMutations(['SET_USERS']),
    },
    computed: {
        ...mapState(['users']),
        ...mapActions(['fetchUsers']),
        ...mapGetters(['getUserById']),
        theUser() {
            return this.getUserById(this.user);
        },
    },
    created() {
        this.SET_USERS(this.fetchUsers);
    },
};
</script>
