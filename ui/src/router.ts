import Vue from 'vue';
import * as VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

import { components } from './views/index';
import { url } from './utils/url';

const routes = [
    { path: url.LatestActivity, component: components.LatestActivity },
    { path: url.ParsonalActivity, component: components.ParsonalActivity },
    { path: url.Profile, component: components.Profile },
    { path: url.Academic, component: components.Academic },
    { path: url.Work, component: components.Work },
    { path: url.TechNotes, component: components.TechNotes },
    // { path: url.TechNotePage, component: components.TechNotes }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
