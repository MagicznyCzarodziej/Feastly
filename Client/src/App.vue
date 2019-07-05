<template>
  <div id="app" >
    <router-view />
    <Navbar v-on:toggle-sidemenu="showMenu = !showMenu"/>
    <SideMenu v-on:logout="logout"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import SideMenu from '@/components/SideMenu';

export default {
  components: {
    Navbar,
    SideMenu,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  watch: {
    $route() {
      // Hide side menu when changing view
      this.showMenu = false;
    },
  },
  methods: {
    logout() {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('username');
      this.$store.dispatch('logout');
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="stylus">
@import './styles/variables.styl'

*
  box-sizing border-box
  margin 0
  padding 0
html
  font-size 20px
  font-family fMain, sans-serif
  background-color cDark
  color cLight
  height 100%
body
  height 100%
#app
  height 100%
  display grid
  grid-template-rows 1fr auto
</style>
