<template>
  <div class="sources">
    <div class="sources__list">
      <Source
        v-for="source in sources"
        :key="source._id"
        :source="source"
        @deleteSource="deleteSource"
      />
    </div>
  </div>
</template>

<script>
import Source from '@/components/Source';
import FeedService from '@/services/FeedService';

export default {
  name: 'Sources',
  components: {
    Source,
  },
  data() {
    return {
      category: this.$route.query.category,
      sources: [],
    };
  },
  beforeMount() {
    this.setHeader();
    this.getSources();
  },
  watch: {
    async $route() {
      this.setHeader();
      this.getSources();
    },
  },
  methods: {
    setHeader() {
      this.$store.dispatch('setHeader', {
        title: 'Źródła',
        sub: `#${this.$route.query.category || 'Wszystkie'}`,
      });
    },
    async getSources() {
      this.category = this.$route.query.category;
      let feeds;
      if (!this.category) feeds = await FeedService.getSources();
      else feeds = await FeedService.getSources({ category: this.category });
      this.sources = feeds;
    },
    deleteSource(id) {
      // eslint-disable-next-line
      this.sources = this.sources.filter(source => source._id != id);
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
</style>
