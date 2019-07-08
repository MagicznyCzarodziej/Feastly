<template>
  <div class="add-source">
    <Error />
    <div class="add-source__header">Dodaj źródło feedu</div>
    <form class="add-source__form" @submit.prevent="handleSubmit">
      <input
        class="add-source__input"
        type="text"
        name="url"
        placeholder="URL"
        v-model="url"
        v-validate="'required|url'"
      >
      <input
        class="add-source__input"
        type="text"
        name="feedname"
        placeholder="Nazwa"
        v-model="name"
        v-validate="'required'"
      >
      <input type="text"
        class="add-source__input"
        list="category"
        placeholder="Kategoria (opcjonalne)"
        v-model="category"
      >
      <datalist id="category">
        <option v-for="category in categories" :key="category" :value="category"/>
      </datalist>
      <input class="add-source__submit" type="submit" value="Dodaj źródło">
    </form>
  </div>
</template>

<script>
import Error from '@/components/Error';
import FeedService from '@/services/FeedService';

export default {
  name: 'addSource',
  components: {
    Error,
  },
  data() {
    return {
      url: null,
      name: null,
      category: '',
      categories: [],
    };
  },
  async beforeCreate() {
    this.categories = await FeedService.getCategories();
    this.categories.sort();
  },
  methods: {
    async handleSubmit() {
      const feed = {
        url: this.url,
        name: this.name,
        category: this.category,
      };
      try {
        await FeedService.addSource(feed);
        this.$router.push('/');
      } catch (error) {
        const { code } = error;
        switch (code) {
          case 'INVALID_FEED_OBJECT':
            this.errors.add({
              field: 'feed',
              msg: 'Nieprawidłowe dane źródła',
            });
            break;
          default:
            this.errors.add({
              field: 'feed',
              msg: 'Nieoczekiwany błąd',
            });
            break;
        }
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

.add-source__header
  font-size 1.4rem
  font-family fMain
  font-weight 100
  color #eee
  padding 0.7rem
  text-align center
  background-color #222
  box-shadow 0 0 0.2rem rgba(0,0,0,0.3)
.add-source__form
  text-align center
  font-size 1.4rem
.add-source__input
  display block
  max-width 15rem
  margin-top 1.4rem
  padding-bottom 0.2rem
  font-size 1.4rem
  font-family fMain
  text-align center
  color cLight
  margin-right auto
  margin-left auto
  background none
  border none
  border-bottom 0.05rem solid cLight
  &::placeholder
    font-size 1.2rem
  &:focus
    outline none
    box-shadow 0 0.4rem 0.3rem -0.3rem rgba(255, 255, 255, 0.3)
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus
    caret-color white
    -webkit-text-fill-color: cLight;
    -webkit-box-shadow: 0 0 0px 30px cDark inset;
    transition: background-color 5000s ease-in-out 0s;
  &::-webkit-calendar-picker-indicator
    display none
.add-source__submit
  margin-top 1.4rem
  background-color transparent
  border none
  font-size 1.4rem
  font-family fMain
  text-align center
  color cLight
  cursor pointer
  margin-top 4rem
  margin-bottom 2rem
  width 15rem
  border 1px solid cLight
  padding 0.5rem 1rem
  user-select none
  transition-duration 0.1s
  &:focus
    outline none
  &:active
    transform translateY(-0.2rem)
</style>
