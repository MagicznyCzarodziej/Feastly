<template>
  <div class="home">
    <div class="feeds__category">
      Feedy / {{ category ? category : 'Wszystkie' }}
    </div>
    <div class="feeds__list">
      <a class="feed" v-for="feed in sortedFeeds" :href="feed.link" :key="feed.guid">
        <div class="feed__meta">
          <div class="feed__s">{{ feed.sourceName }}</div>
          <div class="feed__date">
            {{
              new Date(feed.isoDate).toLocaleDateString('pl', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })
            }}
          </div>
        </div>
        <div class="feed__title">
          {{ feed.title }}
        </div>
        <div class="feed__divider" v-if="feed.contentSnippet"></div>
        <div class="feed__snippet">
          {{ feed.contentSnippet }}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import RssParser from 'rss-parser';
import FeedSerice from '@/services/FeedService';

const rss = new RssParser();
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';


export default {
  name: 'home',
  data() {
    return {
      category: '',
      feeds: [],
    };
  },
  watch: {
    async $route() {
      this.getSources();
    },
  },
  computed: {
    sortedFeeds() {
      return [...this.feeds].sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate));
    },
  },
  async beforeMount() {
    this.getSources();
  },
  methods: {
    async getSources() {
      const { category } = this.$route.query;
      this.category = category;

      const sources = await FeedSerice.getSources({ category });
      const feeds = [];
      await sources.forEach(async (source) => {
        const result = await rss.parseURL(CORS_PROXY + source.url);
        const { items } = result;
        items.forEach((item) => {
          // eslint-disable-next-line
          item.sourceName = source.name;
        });
        feeds.push(...items);
      });
      this.feeds = feeds;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl';

.feeds__category
  font-size 1.4rem
  font-weight 100
  color #eee
  padding 0.7rem
  text-align center
  background-color #222
  box-shadow 0 0 0.2rem rgba(0,0,0,0.3)
.feeds__list
  display flex
  flex-direction column
  padding 1rem 1.5rem
.feed
  padding 0.5rem 1rem
  text-decoration none
  margin 0.5rem 0
  background-color #b8b8b8
  color cDark
  text-align center
  box-shadow 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.3)
.feed__meta
  display flex
  justify-content space-between
  color #777
  margin-bottom 0.5rem
.feed__title
  font-size 1.4rem
  text-transform uppercase
  font-weight 500
.feed__divider
  width 3rem
  margin 0.5rem auto
  border-bottom 0.15rem solid #555
.feed__snippet
  overflow : hidden;
  text-overflow: ellipsis;
  display -webkit-box
  -webkit-line-clamp 1
  -webkit-box-orient vertical
  font-weight 300
</style>
