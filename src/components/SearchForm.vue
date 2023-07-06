<script>
export default {
    props: {
        placeholder: String,
        submitLabel: String,
    },
    data() {
        return {
            searchTerm: '',
        }
    },
    emits: ['term-change', 'form-submit'],
};
</script>

<template>
    <div class="container">
        <form class="d-flex" @submit.prevent="$emit('form-submit')">
            <input @keyup="$emit('term-change', searchTerm)" type="text" :placeholder="placeholder || 'Cerca...'"
                class="form-control mx-5" v-model.trim="searchTerm">
            <button class="btn btn-success">{{ submitLabel || 'Cerca..' }}</button>
        </form>
    </div>
</template>

<style scoped lang="scss"></style>