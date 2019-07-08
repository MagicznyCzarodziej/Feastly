<template>
  <div class="sources">
    <div class="sources-category">
      Źródła / {{ category ? category : 'Wszystkie' }}
    </div>
    <div class="sources__list">
      <div class="source" v-for="source in sources" :key="source.name">
        <div class="source__name">
          {{ source.name }}
        </div>
        <div class="source__url">
          {{ source.url }}
        </div>
        <FeatherIcon class="source__delete" :icon="'trash-2'"></FeatherIcon>
        <FeatherIcon class="source__edit" :icon="'edit-3'"></FeatherIcon>
      </div>
    </div>
  </div>
</template>

<script>
import FeedService from '@/services/FeedService';
import FeatherIcon from '@/components/FeatherIcon';

export default {
  name: 'Sources',
  components: {
    FeatherIcon,
  },
  data() {
    return {
      category: this.$route.query.category,
      sources: [],
    };
  },
  beforeMount() {
    this.getSources();
  },
  watch: {
    async $route() {
      this.getSources();
    },
  },
  methods: {
    async getSources() {
      this.category = this.$route.query.category;
      let feeds;
      if (!this.category) feeds = await FeedService.getSources();
      else feeds = await FeedService.getSources({ category: this.category });
      this.sources = feeds;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

.sources-category
  font-size 1.4rem
  font-family fMain
  font-weight 100
  color #eee
  padding 0.7rem
  text-align center
  background-color #222
  box-shadow 0 0 0.2rem rgba(0,0,0,0.3)
.sources__list
  display flex
  flex-direction column
  padding 1rem 1.5rem
.source
  display grid
  grid-template-areas 'name delete' 'url edit'
  grid-template-columns auto 2rem
  grid-row-gap 0.5rem
  text-align center
  padding 0.5rem 1rem
  margin 0.5rem 0
  background-color #b8b8b8
  color cDark
  box-shadow 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.3)
.source__name
  grid-area name
  font-size 1.4rem
.source__url
  grid-area url
  font-size 1rem
  color #777
  overflow hidden
  text-overflow: ellipsis;
.source__delete
.source__edit
  grid-area delete
  width 1.4rem
  height 1.4rem
  align-self center
  justify-self end
  stroke #999
  stroke-width 1.4
  stroke-linecap round
  stroke-linejoin round
  fill none
  cursor pointer
.source__delete
  grid-area delete
.source__edit
  grid-area edit
</style>
