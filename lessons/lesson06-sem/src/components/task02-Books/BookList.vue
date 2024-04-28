<template>
    <div class="mt-3">
        <h2>Book List from freetestapi</h2>
        <ul>
            <li v-for="book in books" :key="book.id">
                <BookOne :book="book" />
            </li>
        </ul>
    </div>
</template>

<script>
import BookOne from '@/components/task02-Books/BookOne.vue';

export default {
    name: 'BookList',
    components: {
        BookOne,
    },
    props: {
        books: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    data() {
        return {};
    },
};
</script>
