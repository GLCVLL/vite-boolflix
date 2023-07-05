<script>
export default {
    props: {
        placeholder: String,
    },
    data() {
        return {
            searchTerm: '',
        }
    },
    methods: {
        submitForm() {
            this.$emit('form-submit', this.searchTerm)
        },
        resetForm() {
            this.searchTerm = '';
            this.submitform();
        }
    },
    emits: ['form-submit'],
};
</script>

<template>
    <div class="container">
        <form class="d-flex" @submit.prevent="submitForm">
            <input type="text" :placeholder="placeholder || 'Cerca...'" class="form-control mx-5" v-model.trim="searchTerm">
            <button class="btn btn-success">Cerca</button>
            <button class="btn btn-warning ms-3" @click="resetForm">Annulla</button>
        </form>
    </div>
</template>

<style scoped lang="scss"></style>