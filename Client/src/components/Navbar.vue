<template>
  <div v-if="!$route.meta.hideNavbar" class="navbar">
    <div class="navbar__icon">
      <router-link class="navbar__link" to="addSource">
        <svg class="navbar__icon__svg">
          <use xlink:href="@/assets/icons/feather-sprite.svg#plus"/>
        </svg>
      </router-link>
    </div>
    <div class="navbar__icon">
      <svg class="navbar__icon__svg">
        <use xlink:href="@/assets/icons/feather-sprite.svg#hash"/>
      </svg>
    </div>
    <div class="navbar__icon">
      <svg class="navbar__icon__svg">
        <use xlink:href="@/assets/icons/feather-sprite.svg#search"/>
      </svg>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

.navbar
  width 100%
  height 3.5rem
  background-color #111
  position fixed
  bottom 0
  display grid 
  grid-template-columns auto auto auto
  box-shadow 0 0rem 0.2rem rgba(0, 0, 0, 0.3);
.navbar__icon
  text-align center
.navbar__link
  display block
  width 100%
  height 100%
.navbar__icon__svg
  width 2rem
  height 2rem
  margin-top 0.7rem
  stroke cLight
  stroke-width 1
  stroke-linecap round
  stroke-linejoin round
  fill none
</style>
