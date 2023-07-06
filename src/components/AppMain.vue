<script>
import axios from 'axios';
import { api } from '../data';
import { store } from '../data/store';
import searchForm from './SearchForm.vue';
export default {
    components: { searchForm },
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
        <searchForm @term-change="setTitleFilter" @form-submit="searchProd" />
    </header>
</template>

<style scoped lang="scss">
header {
    height: 120px;
    background-color: black;
    display: flex;
    align-items: center;
}
</style>