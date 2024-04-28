<template>
    <div class="mt-2">
        <div class="row">
            <p class="col col-3">id: {{ book.id }}</p>
            <h4 class="col col-9">title: {{ book.title }}</h4>
        </div>
        <div class="row">
            <p class="col">author: {{ book.author }}</p>
            <p class="col">publication_year: {{ book.publication_year }}</p>
        </div>
        <button
            @click="showDetail"
            class="btn"
            :class="isShowDetail ? 'btn-info' : 'btn-primary'"
        >
            {{ setDetailsBtnTxt }}
        </button>
        <div v-if="isShowDetail" class="alert alert-info">
            <p>{{ book.genre }}</p>
            <p>{{ book.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookOne',
    props: {
        book: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    data() {
        return {
            isShowDetail: false,
        };
    },
    methods: {
        showDetail() {
            this.isShowDetail = !this.isShowDetail;
        },
    },
    computed: {
        setDetailsBtnTxt() {
            if (this.isShowDetail) {
                return 'Hide extended details about the book';
            } else {
                return 'Show extended details about the book';
            }
        },
    },
};
</script>
