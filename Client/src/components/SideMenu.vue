<template>
  <div
    class="side-menu"
    v-if="!$route.meta.hideInterface"
    v-bind:class="{ 'side-menu--hidden': !this.$parent.showMenu}"
  >
    <router-link to="today" class="side-menu__item side-menu__link">
      <FeatherIcon class="side-menu__icon" :icon="'feather'" />
      <div>Dzisiaj</div>
    </router-link>
    <router-link to="readLater" class="side-menu__item side-menu__link">
      <FeatherIcon class="side-menu__icon" :icon="'bookmark'" />
      <div>Do przeczytania</div>
    </router-link>
    <div class="side-menu__separator">
      FEEDY
    </div>
    <router-link to="feeds" class="side-menu__item side-menu__link">
      <FeatherIcon class="side-menu__icon" :icon="'menu'" />
      <div>Wszystkie</div>
    </router-link>
    <div to="" class="side-menu__item side-menu__link">
      <FeatherIcon class="side-menu__icon" :icon="'chevron-right'" />
      <div>Nauka</div>
    </div>
    <div to="" class="side-menu__item side-menu__link">
      <FeatherIcon class="side-menu__icon" :icon="'chevron-right'" />
      <div>Kosmos</div>
    </div>
    <div to="" class="side-menu__item side-menu__link">
      <FeatherIcon class="side-menu__icon" :icon="'chevron-right'" />
      <div>Technologia</div>
    </div>
    <router-link class="side-menu__item side-menu__button" to="addSource">
      Dodaj źródło
    </router-link>

    <div class="side-menu__botttom-spacer"></div>

    <div class="side-menu__username">{{ $store.getters.username }}</div>
    <div class="side-menu__item side-menu__link" @click="$emit('logout')">
      <FeatherIcon class="side-menu__icon" :icon="'log-out'" />
      <div>Wyloguj</div>
    </div>
  </div>
</template>

<script>
import FeatherIcon from '@/components/FeatherIcon';

export default {
  name: 'SideMenu',
  components: {
    FeatherIcon,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="stylus" scoped>
.side-menu
  height calc(100% - 3rem)
  width 14rem
  background-color #3b3b3b
  position fixed
  top 0
  left 0
  padding 0.5rem 0
  display flex
  flex-direction column
  transition-duration 0.3s
  transition-timing-function ease-out
.side-menu--hidden
  left -14rem
.side-menu__item
  font-size 1rem
  color #ccc
  padding 0.4rem 1rem
  display flex
  color #eee
  text-decoration none
  cursor pointer
.side-menu__button
  display block
  text-align center
  border 0.05rem solid #eee
  margin 0.5rem 1rem
  padding 0.6rem
  color #eee
  text-decoration none
  transition-duration 0.1s
  &:active
    background-color #2a2a2a
.side-menu__separator
  font-size 0.8rem
  font-weight bold
  color #777777
  margin-top 1.5rem
  margin-bottom 0.5rem
  margin 1.5rem 0 0.5rem 0.5rem
.side-menu__icon
  width 1.2rem
  height 1.2rem
  stroke #777
  stroke-width 1.8
  stroke-linecap round
  stroke-linejoin round
  fill none
  margin-right 0.5rem
.side-menu__botttom-spacer
  flex 1
.side-menu__username
  padding 0.4rem 1rem 0.2rem
  cursor default
  color #aaa
</style>
