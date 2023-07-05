<script>
import SearchForm from './SearchForm.vue';
export default {
    data() {
        return {
            nameFilter: '',
        }
    },
    components: { SearchForm },
    methods: {
        onTermChange(term) {
            this.nameFilter = term;
        },
    }
};
</script>

<template>
    <header>
        <SearchForm @form-submit="onTermChange" />
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