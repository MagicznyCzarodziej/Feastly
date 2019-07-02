import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App';
import router from './router';
import store from './store';
import dictionary from './validateDictionary';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VeeValidate, { dictionary, locale: 'pl' });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
