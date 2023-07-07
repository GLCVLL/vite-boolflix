<script>
import ProductionSection from './ProductionSection.vue'
export default {
    components: { ProductionSection },
}
</script>

<template>
    <main>
        <ProductionSection title="Movies" collection="movies" />
        <ProductionSection title="TV Series" collection="series" />
    </main>
</template>

<script scoped lang="scss"></script>