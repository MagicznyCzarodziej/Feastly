<template>
  <transition name="slide">
    <div v-if="errors.any()" class="error">
      <span v-for="error in errors.all()" :key="error.id" class="error__message">
        {{ error }} <br>
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Error',
  inject: ['$validator'],
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

.error
  position absolute
  top 0
  width 100%
  background-color cErrorBg
  padding 0.6rem
  box-shadow 0 0 0.1rem cErrorBg
.error__message
  word-break break-word
.slide-enter-active, .slide-leave-active
  transition top .5s
.slide-enter, .slide-leave-to
  top -5rem
</style>
