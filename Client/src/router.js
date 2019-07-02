import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/addSource',
      name: 'AddSource',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/AddSource.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      meta: { hideNavbar: true },
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      meta: { hideNavbar: true },
      component: () => import('./views/Register.vue'),
    },
  ],
});
