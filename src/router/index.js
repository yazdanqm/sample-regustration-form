import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DescriptionView from "@/views/DescriptionView.vue";
import HelloWorldView from "@/views/HelloWorldView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/description',
            name: 'description',
            component: DescriptionView
        },
        {
            path: '/hello-world',
            name: 'hello-world',
            component: HelloWorldView
        }
    ]
})

export default router
