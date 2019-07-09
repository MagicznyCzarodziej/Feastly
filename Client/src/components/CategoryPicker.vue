<template>
  <div
    v-if="!$route.meta.hideInterface"
    class="category-picker"
    :class="{'category-picker--hidden': !this.$parent.showCategoryPicker}"
  >
    <div
      class="category-picker__category"
      @click="openCategory('')"
    >
      Wszystkie
    </div>
    <div
      class="category-picker__category"
      v-for="category in categories"
      :key="category"
      @click="openCategory(category)"
    >
      {{ category }}
    </div>
  </div>
</template>

<script>
import FeedService from '@/services/FeedService';

export default {
  nane: 'CategoryPicker',
  data() {
    return {
      categories: [],
    };
  },
  async mounted() {
    this.categories = await FeedService.getCategories();
    this.categories.sort();
  },
  methods: {
    openCategory(category) {
      this.$emit('toggle-category-picker', false);
      this.$router.push(`/?category=${category}`);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

.category-picker
  position fixed
  bottom: 3rem
  width 100%
  background-color #161616
  box-shadow 0 0 0.3rem rgba(0, 0, 0, 0.3);
  transform-origin bottom
  transition 0.3s
.category-picker--hidden
  transform translateY(100%)
.category-picker__category
  text-align center
  font-size 1.2rem
  padding 0.8rem 0
  cursor pointer
  border-top 0.05rem solid #222
</style>
