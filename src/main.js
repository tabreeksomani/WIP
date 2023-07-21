import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css';
import router from '../src/router/index.js';


const vuetify = createVuetify({
    components,
    directives,
}, {
    iconfont: 'mdiSvg',


})


createApp(App).use(vuetify).use(router).mount('#app')
