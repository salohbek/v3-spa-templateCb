import { createRouter, createWebHistory } from "vue-router"
import home from "../components/home.vue"
import about from "../components/about.vue"
import products from "../components/products.vue"
import store from "../components/store.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: home
        },
        {
            path: '/about',
            component: about
        },
        {
            path: '/',
            redirect: "/home"
        },
        {
            path: '/products',
            component:products
        },
        {
            path: '/store',
            component:store
        },
            
    ]
})
export default router;
