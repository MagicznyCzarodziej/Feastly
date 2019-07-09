<template>
  <div v-if="!$route.meta.hideInterface" class="view__header">
    <span class="view__header__title">{{ title }}</span>
    <span class="view__header__sub">{{ sub }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  computed: mapState({
    title: state => state.header.title,
    sub: state => state.header.sub,
  }),
};
</script>

<style lang="stylus" scoped>
.view__header
  height 3rem
  font-size 1.4rem
  font-weight 100
  color #eee
  line-height 3rem
  padding 0 1.5rem
  text-align left
  background-color #111
  box-shadow 0 0 0.3rem rgba(0,0,0,0.3)
.view__header__title
  font-weight 400
.view__header__sub
  font-size 1.2rem
  margin-left 0.4rem
</style>
