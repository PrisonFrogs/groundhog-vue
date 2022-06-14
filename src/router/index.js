import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '@/pages/HomeView.vue';

import PostsRoute from './posts.route';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue'),
  },
  ...PostsRoute,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
