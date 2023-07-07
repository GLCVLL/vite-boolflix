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
        <div class="col">
            <ProductionCard class="p-2" v-for="production in store[collection]" :key="production.id" :item="production" />
        </div>
    </section>
</template>

<style scoped lang="scss">
.col {
    display: flex;
    flex-wrap: wrap;
}
</style>