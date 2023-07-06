<script>
export default {
    props: {
        item: Object,
    },
    computed: {
        title() {
            return this.item.title || this.item.name
        },
        originalTitle() {
            return this.item.original_title || this.item.original_name
        },
        hasFlag() {
            const flags = ['it', 'en'];
            return flags.includes(this.item.original_language);
        },
        flagSrc() {
            const url = new URL(`../assets/img/${this.item.original_language}.
            png`, import.meta.url);
            return url.href
        }
    }
};
</script>

<template>
    <ul>
        <li>{{ title }}</li>
        <li>{{ originalTitle }}</li>
        <li>
            <img class="img-fluid" v-if="hasFlag" :src="flagSrc" :alt="item.original_language">
            <span v-else>{{ item.original_language }}</span>
        </li>
        <li>{{ item.vote_average }}</li>
    </ul>
</template>

<style scoped lang="scss">
ul {
    list-style-type: none;
}
</style>