<template>
    <div id="app" class="container">
        <UserList :users="users" />
        <div class="mt-5 mb-5">
            <button @click="showBooks" class="btn btn-success">
                {{ setBookBtnText }}
            </button>
            <BookList :books="books" v-if="isShowBooks" />
        </div>
        <div class="mt-5 mb-5">
            <button @click="showMovies" class="btn btn-success">
                {{ setMovieBtnTxt }}
            </button>
            <MovieList :movies="movies" v-if="isShowMovies" />
        </div>
    </div>
</template>

<script>
import UserList from '@/components/task01-Users/UserList.vue';
import BookList from '@/components/task02-Books/BookList.vue';
import MovieList from '@/components/task03-Movies/MovieList.vue';

export default {
    name: 'App',
    components: {
        UserList,
        BookList,
        MovieList,
    },
    data() {
        return {
            users: [],
            books: [],
            isShowBooks: false,
            movies: [],
            isShowMovies: false,
        };
    },
    methods: {
        fetchUsers() {
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `HTTP error! Status: ${response.status}`
                        );
                    }
                    response.json().then((data) => {
                        this.users = data;
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        fetchBooks() {
            fetch('https://freetestapi.com/api/v1/books', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `HTTP error! Status: ${response.status}`
                        );
                    }
                    response.json().then((data) => {
                        this.books = data;
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        showBooks() {
            this.fetchBooks();
            this.isShowBooks = !this.isShowBooks;
        },
        fetchMovies() {
            return [
                {
                    id: 0,
                    title: 'The Lion King',
                    year: '2019',
                    runtime: '118 min',
                    poster: 'https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg',
                },
                {
                    id: 1,
                    title: 'Mowgli: Legend of the Jungle',
                    year: '2018',
                    runtime: '104 min',
                    poster: 'https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg',
                },
                {
                    id: 2,
                    title: 'Doctor Strange',
                    year: '2016',
                    runtime: '115 min',
                    poster: 'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg',
                },
                {
                    id: 3,
                    title: 'John Wick',
                    year: '2014',
                    runtime: '101 min',
                    poster: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg',
                },
                {
                    id: 4,
                    title: 'The Notebook',
                    year: '2004',
                    runtime: '123 min',
                    poster: 'https://images.elenivan.ru/jpg/venece.jpg',
                },
            ];
        },
        showMovies() {
            this.movies = this.fetchMovies();
            this.isShowMovies = !this.isShowMovies;
        },
    },
    created() {
        this.fetchUsers();
    },
    computed: {
        setBookBtnText() {
            if (this.isShowBooks) {
                return 'Hide Books List';
            } else {
                return 'Show Books List';
            }
        },
        setMovieBtnTxt() {
            if (this.isShowMovies) {
                return 'Hide Movies List';
            } else {
                return 'Show Movies List';
            }
        },
    },
};
</script>

<style lang="scss"></style>
