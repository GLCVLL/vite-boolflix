import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar);


createApp(App)
.component('FontAwesomeIcon', FontAwesomeIcon)
.mount('#app')
