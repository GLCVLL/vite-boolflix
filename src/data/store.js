import { reactive } from "vue";

const store = reactive({
    movies: [],
    series: [],
    tittleFilter: '',
});

export {store};