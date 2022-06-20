import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '@/pages/HomeView.vue';

import PostsRoute from './posts.route';
import MyProfile from './profile.route';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      transition: 'scale',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import('@/pages/LoadingScreen.vue'),
  },
  ...PostsRoute,
  ...MyProfile,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
