<script>
import ProductionCard from './ProductionCard.vue';
import { store } from '../data/store';
export default {
    data() {
        return { store }
    },
    components: { ProductionCard },
    props: {
        title: String,
        collection: String
    },
}
</script>

<template>
    <section :id="title">
        <h2>{{ title }}</h2>
        <ProductionCard v-for="production in store[collection]" :key="production.id" :item="production" />
    </section>
</template>

<script scoped lang="scss"></script>