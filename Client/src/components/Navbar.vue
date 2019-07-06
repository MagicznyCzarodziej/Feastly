<template>
  <div v-if="!$route.meta.hideInterface" class="navbar">
    <div class="navbar__icon" @click="$emit('toggle-sidemenu')">
      <FeatherIcon class="navbar__icon__svg" :icon="'menu'"/>
    </div>
    <div class="navbar__icon navbar__icon--main">
      <FeatherIcon class="navbar__icon__svg" :icon="'hash'"/>
    </div>
    <div class="navbar__icon">
      <FeatherIcon class="navbar__icon__svg" :icon="'search'"/>
    </div>
  </div>
</template>

<script>
import FeatherIcon from '@/components/FeatherIcon';

export default {
  name: 'Navbar',
  components: {
    FeatherIcon,
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

.navbar
  width 100%
  height 3rem
  background-color #111
  display grid
  grid-template-columns auto auto auto
  box-shadow 0 0rem 0.2rem rgba(0, 0, 0, 0.3);
.navbar__icon
  text-align center
  cursor pointer
.navbar__link
  display block
  width 100%
  height 100%
.navbar__icon__svg
  width 1.5rem
  height 1.5rem
  margin-top 0.75rem
  stroke cLight
  stroke-width 1
  stroke-linecap round
  stroke-linejoin round
  fill none
.navbar__icon--main {
  border-left 1px solid black
  border-right 1px solid black
}
</style>
