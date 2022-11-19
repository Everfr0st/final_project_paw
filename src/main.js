import { createApp } from 'vue'
import './assets/styles.css'
import App from './App.vue'
import router from './router/router'
import createStore from '../store'

createApp(App)
    .use(router)

    .use(createStore)


    .mount('#app')

