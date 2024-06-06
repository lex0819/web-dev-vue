<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthorStore } from '@/stores/author';

const { authors } = storeToRefs(useAuthorStore());
const { fetchAuthors } = useAuthorStore();

fetchAuthors();

const activeAuthor = defineModel();
</script>

<template>
    <div>
        <div v-if="authors">
            <h2>Choose one author</h2>
            <select name="author" id="authors" v-model="activeAuthor">
                <option value="">all authors</option>
                <option v-for="author in authors" :key="author.id" :value="author.id">
                    {{ author.name }}
                </option>
            </select>
            <p>Chosen user: {{ activeAuthor }}</p>
        </div>
    </div>
</template>


