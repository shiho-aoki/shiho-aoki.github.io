import Vue from 'vue';
import * as VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router'

// views import
// -top level componets
import Home from './views/Home.vue'; //Latest Activity
import TechNotes from './views/TechNote/TechNotes.vue';
import Projects from './views/ParsonalActivity/Projects.vue';
import Timeline from './views/Timeline/Timeline.vue';
import About from './views/Profile/About.vue';

// Pages
// -about
import Academic from './views/Profile/Academic.vue';
import Work from './views/Profile/Work.vue';

const routes = [
    //Top level Components
    {path: '/', component: Home }, //Latest Activity Top
    {path: '/tech_note', component: TechNotes},
    {path: '/project', component: Projects },
    {path: '/timeline', component:Timeline},
    {path: '/about',component: About},
    //Pages
    // -about
    {path: '/about/work', component: Work},
    {path: '/about/academic', component: Academic}
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;
