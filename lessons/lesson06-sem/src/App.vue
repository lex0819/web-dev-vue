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
            fetch(
                'https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                }
            )
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `HTTP error! Status: ${response.status}`
                        );
                    }
                    response.json().then((data) => {
                        this.movies = data;
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        showMovies() {
            this.fetchMovies();
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
