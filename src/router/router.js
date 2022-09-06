import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../components/Landing/Home.vue'
import Shops from '../components/Shop/Shops.vue'
import Register from '../components/Register/Register.vue'
import Login from '../components/Login/Login.vue'


// Considerar para los routes hacer las pestañas de congfiguración de manera anidada, es decir, que las pestañas de
//configuración sean hijas de Configuración
const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/Register', component: Register},
    {path: '/Shops', component:Shops},

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router;