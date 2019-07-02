/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem('auth_token'),
  },
  mutations: {
    login(state, username) {
      state.isLoggedIn = true;
      state.username = username;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login({ commit }, username) {
      commit('login', username);
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
  },
});
