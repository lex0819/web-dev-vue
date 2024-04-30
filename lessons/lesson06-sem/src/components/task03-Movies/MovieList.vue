<template>
    <div class="mt-3">
        <h2>Movie List</h2>
        <ul>
            <li v-for="movie in movies" :key="movie.id">
                <MovieInfo :movie="movie" @getMovieInfo="handleReview" />
            </li>
        </ul>
    </div>
</template>

<script>
import MovieInfo from '@/components/task03-Movies/MovieInfo.vue';

export default {
    name: 'MovieList',
    components: {
        MovieInfo,
    },
    props: {
        movies: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    data() {
        return {};
    },
    methods: {
        handleReview(data) {
            const findItem = this.movies.find((it) => it.id === data.id);
            console.log(findItem);
            console.log(data);
            if (findItem) {
                findItem.year = data.year;
                findItem.runtime = data.runtime;
            }
        },
    },
};
</script>
