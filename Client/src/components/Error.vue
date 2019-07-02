<template>
  <transition name="slide">
    <div v-if="error.message" class="error">
      <span class="error__message">{{ error.message }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
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
