import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Vue2TouchEvents from 'vue2-touch-events';
import App from './App';
import router from './router';
import store from './store';
import dictionary from './validateDictionary';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(Vue2TouchEvents, { swipeTolerance: 50 });
Vue.use(VeeValidate, { dictionary, locale: 'pl' });

// 404 error hangler
router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/');
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLoggedIn) next('/login');
  else next();
});

// Set tab title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Feastly';
  next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
