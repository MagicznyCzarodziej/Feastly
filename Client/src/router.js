import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Login from './views/Login';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { auth: true },
      component: Home,
    },
    {
      path: '/addSource',
      name: 'AddSource',
      meta: { auth: true },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/AddSource.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      meta: { hideInterface: true },
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      meta: { hideInterface: true },
      component: () => import('./views/Register.vue'),
    },
    {
      path: '*',
      name: '404',
      component: Login,
    },
  ],
});
