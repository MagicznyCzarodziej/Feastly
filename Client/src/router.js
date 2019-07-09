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
      meta: {
        title: 'Feastly',
        auth: true,
      },
      component: Home,
    },
    {
      path: '/addSource',
      name: 'AddSource',
      meta: {
        title: 'Feastly | Dodaj źródło',
        auth: true,
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/AddSource.vue'),
    },
    {
      path: '/sources',
      name: 'Sources',
      meta: {
        title: 'Feastly | Źródła',
        auth: true,
      },
      component: () => import('./views/Sources.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: 'Feastly | Zaloguj się',
        hideInterface: true,
      },
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      meta: {
        title: 'Feastly | Zarejestruj się',
        hideInterface: true,
      },
      component: () => import('./views/Register.vue'),
    },
  ],
});
