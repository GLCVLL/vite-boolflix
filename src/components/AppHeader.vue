<script>
import axios from 'axios';
import BaseCard from './BaseCard.vue';
import { api } from '../data';
import { store } from '../data/store';
import SearchForm from './SearchForm.vue';
export default {
    components: { SearchForm, BaseCard },
    data() {
        return {
            store,
            titleFilter: '',
        }
    },
    computed: {
        axiosConfig() {
            const { key, language } = api;
            return {
                params: {
                    language,
                    api_key: key,
                    query: this.titleFilter,
                }
            };
        }
    },
    methods: {
        setTitleFilter(term) {
            this.titleFilter = term;
        },
        searchProd() {
            if (!this.titleFilter) {
                store.movies = [];
                store.series = [];
                return;
            };
            this.fetchApi("search/movie", "movies");
            this.fetchApi("search/tv", "series");
        },

        fetchApi(endpoint, target) {
            axios.get(`${api.baseUri}/${endpoint}`, this.axiosConfig)
                .then(res => {
                    store[target] = res.data.results;
                });
        }
    },
};
</script>

<template>
    <header>
        <SearchForm @term-change="setTitleFilter" @form-submit="searchProd" />
    </header>
    <main>
        <h1>Movies</h1>
        <BaseCard v-for="movie in store.movies" :key="movie.id" :item="movie" />
        <h1>Series</h1>
        <BaseCard v-for="serie in store.series" :key="serie.id" :item="serie" />
    </main>
</template>

<style scoped lang="scss">
header {
    height: 120px;
    background-color: black;
    display: flex;
    align-items: center;
}
</style>