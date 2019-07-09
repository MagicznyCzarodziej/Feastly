/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem('auth_token'),
    username: localStorage.getItem('username'),
    header: {
      title: '',
      sub: '',
    },
  },
  mutations: {
    login(state, username) {
      state.isLoggedIn = true;
      state.username = username;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.username = null;
    },
    setHeader(state, header) {
      state.header.title = header.title;
      state.header.sub = header.sub;
    },
  },
  actions: {
    login({ commit }, username) {
      commit('login', username);
    },
    logout({ commit }) {
      commit('logout');
    },
    setHeader({ commit }, header) {
      commit('setHeader', header);
    },
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    username: state => state.username,
    header: state => state.header,
  },
});
