<template>
    <div class="mt-2">
        <div class="row">
            <h4 class="col col-9">Title: {{ movie.title }}</h4>
            <input
                type="text"
                placeholder="Year"
                v-model="year"
                class="col-3"
            />
        </div>
        <button
            @click="showMore"
            class="btn"
            :class="isShowMore ? 'btn-info' : 'btn-primary'"
        >
            {{ setMoreBtnTxt }}
        </button>
        <button @click="editMovie" class="btn btn-danger">
            Change movie's info
        </button>
        <div v-if="isShowMore" class="alert alert-info">
            <input type="text" placeholder="Runtime" v-model="runtime" />
            <div>
                <img :src="movie.poster" alt="image" class="img-size" />
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
            year: '',
            runtime: '',
        };
    },
    created() {
        this.year = this.movie.year;
        this.runtime = this.movie.runtime;
    },
    methods: {
        showMore() {
            this.isShowMore = !this.isShowMore;
        },
        editMovie() {
            const data = {
                runtime: this.runtime,
                year: this.year,
                id: this.movie.id,
            };
            this.$emit('getMovieInfo', data);
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
<style>
.img-size {
    width: 300px;
    height: 450px;
}
</style>
