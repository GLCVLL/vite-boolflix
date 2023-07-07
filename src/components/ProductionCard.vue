<script>
import { pic } from '../data';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    props: {
        item: Object,
    },
    computed: {
        title() {
            return this.item.title || this.item.name;
        },
        originalTitle() {
            return this.item.original_title || this.item.original_name;
        },
        hasFlag() {
            const flags = ["it", "en"];
            return flags.includes(this.item.original_language);
        },
        flagSrc() {
            const url = new URL(`../assets/img/${this.item.original_language}.png`, import.meta.url);
            return url.href;
        },
        posterPath() {
            if (!this.item.poster_path) return pic.placeHolder;
            return pic.baseUrl + this.item.poster_path;
        },
        vote() {
            return Math.ceil(this.item.vote_average / 2);
        },
    },
    methods: {
        iconClass(n) {
            return n <= this.vote ? "fas" : "far";
        }
    },
    components: { FontAwesomeIcon }
};
</script>

<template>
    <div class="my-card-container">
        <div class="card-image">
            <img class="img-fluid" :src="posterPath" :alt="title">
        </div>
        <div class="card-info">
            <ul>
                <li>{{ title }}</li>
                <li>{{ originalTitle }}</li>
                <li>
                    <FontAwesomeIcon v-for="n in 5" :key="n" :icon="[iconClass(n), 'star']" />
                </li>
                <li>{{ item.vote_average }}</li>
                <li>
                    <img class="img-fluid nation-img" v-if="hasFlag" :src="flagSrc" :alt="item.original_language">
                    <span v-else>{{ item.original_language }}</span>
                </li>
                <li>{{ item.overview }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
ul {
    list-style-type: none;
}

.nation-img {
    height: 30px;
    width: 30px;
}

.my-card-container {
    position: relative;
}

.card-image {
    position: relative;
    overflow: hidden;
    transition: opacity 0.3s;
}

.card-image img {
    transition: transform 0.3s;
}

.card-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background-color: black;
    color: white;
    opacity: 0;
    transition: opacity 0.3s;
}

.my-card-container:hover .card-image {
    opacity: 0;
}

.my-card-container:hover .card-info {
    opacity: 1;
}
</style>