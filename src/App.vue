<script>
import axios from 'axios';
import { api } from './data/index';
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'
export default {
  components: { AppHeader, AppMain },
  computed: {
    axiosConfig() {
      const { key, language } = api;
      return {
        params: {
          language,
          api_key: key,
          query: store.titleFilter,
        }
      };
    }
  },
  methods: {
    setTitleFilter(term) {
      store.titleFilter = term;
    },
    searchProd() {
      if (!store.titleFilter) {
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
}

</script>

<template>
  <AppHeader @search-submit="searchProd" />

  <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>