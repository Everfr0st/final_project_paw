import { createRouter, createWebHashHistory } from "vue-router";

// Considerar para los routes hacer las pestañas de congfiguración de manera anidada, es decir, que las pestañas de
//configuración sean hijas de Configuración
const routes = [
    {path: '/', component: () => import('../components/Landing/Home.vue')},
    {path: '/login',  component: () => import('../components/Login/Login.vue')},
    {path: '/Register', component: () => import('../components/Register/Register.vue')},
    {path: '/Shops', component: () => import('../components/Shop/Shops.vue')},
    {path: '/ShopCart', component: () => import('../components/Landing/Shopcart.vue')},
    {path: '/:pathMatch(.*)*', component: () => import('../components/Shared/ErrorPage.vue')},
    {path: '/prueba', component:() => import('../components/Shop/ShowShops.vue')},
    {path: '/chat', component:() => import('../components/Chat/Chat.vue')}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router;