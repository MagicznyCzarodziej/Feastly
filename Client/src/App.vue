<template>
  <div id="app" v-touch:swipe.right="toggleMenu(true)" v-touch:swipe.left="toggleMenu(false)">
    <Header/>
    <router-view class="view" v-touch="hideAll()" @click="hideAll()"/>
    <Navbar
      v-on:toggle-sidemenu="toggleMenu()"
      v-on:toggle-category-picker="toggleCategoryPicker()"
    />
    <SideMenu v-on:logout="logout"/>
    <CategoryPicker v-on:toggle-category-picker="toggleCategoryPicker()"/>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import CategoryPicker from '@/components/CategoryPicker';
import SideMenu from '@/components/SideMenu';

export default {
  components: {
    Header,
    Navbar,
    CategoryPicker,
    SideMenu,
  },
  data() {
    return {
      showMenu: false,
      showCategoryPicker: false,
    };
  },
  watch: {
    $route() {
      // Hide side menu when changing view
      this.showMenu = false;
    },
  },
  methods: {
    toggleMenu(param = !this.showMenu) {
      this.showMenu = param;
      // Fallback for v-touch
      return () => {
        this.showMenu = param;
      };
    },
    toggleCategoryPicker(param = !this.showCategoryPicker) {
      this.showCategoryPicker = param;
      // Fallback for v-touch
      return () => {
        this.showCategoryPicker = param;
      };
    },
    hideAll() {
      return () => {
        this.showMenu = false;
        this.showCategoryPicker = false;
      };
    },
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
  user-select()
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
  grid-template-rows auto 1fr auto
.view
  overflow-y scroll
</style>
