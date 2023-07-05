<script>
import BaseCard from './BaseCard.vue';
import axios from 'axios';
const endpoint = 'https://api.themoviedb.org/3/search';
export default {
    components: { BaseCard },
    data() {
        return {
            movies: [],
        }
    },
    searchMovies(query) {
        const apiKey = '8c861616e007fa4b4b7339acd654cb20';
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
        axios.get(url).then(res => {
            this.movies = res.data.results;
        }).catch(error => {
            console.error(error);
        });
    },
};
</script>

<template>
    <BaseCard />
</template>

<style scoped lang="scss"></style>