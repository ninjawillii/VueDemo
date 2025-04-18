import { createRouter, createWebHistory, } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import LiveFeed from './views/LiveFeed.vue';

const routes: RouteRecordRaw[] = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/feed', component: LiveFeed }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;