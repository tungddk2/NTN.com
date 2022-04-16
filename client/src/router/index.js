import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import RegistrationPage from "@/views/RegistrationPage.vue";

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
    },
    {
        path: '/registration',
        name: 'registration',
        component: RegistrationPage,
        // component: () => import(/* webpackChunkName: "registration" */ '@/views/RegistrationPage.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'custom-route-link',
})

export default router;
