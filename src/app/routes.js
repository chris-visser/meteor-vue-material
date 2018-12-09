export default [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./pages/About.vue'),
    meta: { layout: 'public' },
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('./pages/NotFound.vue')
  },
];
