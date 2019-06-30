<template>
  <div id="app">
    <router-view/>
    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  components: {
    Navbar,
  }
}
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
#app 
  margin-bottom 4.2rem
</style>
