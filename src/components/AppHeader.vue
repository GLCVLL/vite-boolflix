<script>
import { store } from '../data/store';
import SearchForm from './SearchForm.vue';
export default {
    components: { SearchForm },
    methods: {
        setTitleFilter(term) {
            store.titleFilter = term;
        }
    },
    emits: ['search-submit'],
};
</script>

<template>
    <header>
        <h1>BOOLFLIX</h1>
        <SearchForm @term-change="setTitleFilter" @form-submit="$emit('search-submit')" />
    </header>
</template>

<style scoped lang="scss">
header {
    height: 120px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

h1 {
    color: red;
    margin: 0 10px;
}
</style>