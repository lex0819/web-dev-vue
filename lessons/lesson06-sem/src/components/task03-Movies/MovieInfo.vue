<template>
    <div class="mt-2">
        <div class="row">
            <h4 class="col col-9">Title: {{ movie.Title }}</h4>
            <p class="col-3">Year: {{ movie.Year }}</p>
        </div>
        <div>
            <textarea name="" id="" cols="20" rows="5"></textarea>
            <button @click="sendReview" class="btn btn-warning">save</button>
        </div>
        <button
            @click="showMore"
            class="btn"
            :class="isShowMore ? 'btn-info' : 'btn-primary'"
        >
            {{ setMoreBtnTxt }}
        </button>
        <div v-if="isShowMore" class="alert alert-info">
            <p>Runtime {{ movie.Runtime }}</p>
            <div>
                <img :src="movie.Poster" alt="image" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieInfo',
    props: {
        movie: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    data() {
        return {
            isShowMore: false,
        };
    },
    methods: {
        showMore() {
            this.isShowMore = !this.isShowMore;
        },
        sendReview() {
            const data = '';
            this.this.$emit('getReview', data);
        },
    },
    computed: {
        setMoreBtnTxt() {
            if (this.isShowMore) {
                return "Hide more movie's details";
            } else {
                return "Show more movie's details";
            }
        },
    },
};
</script>
