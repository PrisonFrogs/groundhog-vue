export default [
  {
    path: '/posts/:id',
    name: 'post',
    component: () => import('@/pages/posts/show.vue'),
  },
];
