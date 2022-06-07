import Vue from 'vue';
import * as VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router'

// views import
import Home from './views/Home.vue';
import About from './views/About.vue';

const routes = [
    {path: '/', component: Home },
    {path: '/about',component: About},
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;
