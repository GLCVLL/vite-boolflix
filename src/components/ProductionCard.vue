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
            console.log(url, this.item.original_language);
            return url.href;
        },
        posterPath() {
            if (!this.item.poster_path) return null;
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
    <div class="card-container">
        <img class="img-fluid" :src="posterPath" :alt="title">
        <div class="card-info">
            <ul>
                <li>{{ title }}</li>
                <li>{{ originalTitle }}</li>
                <li>
                    <FontAwesomeIcon v-for="n in 5" :key="n" :icon="[iconClass(n), 'star']" />
                </li>
                <li>{{ item.vote_average }}</li>
                <li>
                    <img class="img-fluid" v-if="hasFlag" :src="flagSrc" :alt="item.original_language">
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

.card-container {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
    transition: box-shadow 0.3s ease;
    position: relative;
}

.card-container:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-info {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-container:hover .card-info {
    display: block;
}
</style>