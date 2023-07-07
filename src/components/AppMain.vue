<script>
import ProductionSection from './ProductionSection.vue'
export default {
    components: { ProductionSection },
}
</script>

<template>
    <main>
        <ProductionSection title="Movies" collections="movies" />
        <ProductionSection title="TV Series" collections="series" />
    </main>
</template>

<script scoped lang="scss"></script>