<template>
  <div class="source">
    <div class="source__name">
      {{ source.name }}
    </div>
    <div class="source__url">
      {{ source.url }}
    </div>
    <div class="source__delete" @click="deleteSource">
      <FeatherIcon :icon="'trash-2'"/>
    </div>
    <div class="source__edit">
      <FeatherIcon :icon="'edit-3'"/>
    </div>
  </div>
</template>

<script>
import FeedService from '@/services/FeedService';
import FeatherIcon from '@/components/FeatherIcon';

export default {
  name: 'Source',
  components: {
    FeatherIcon,
  },
  props: [
    'source',
  ],
  methods: {
    async deleteSource() {
      // eslint-disable-next-line
      const sourceId = this.source._id;
      await FeedService.deleteSource(sourceId);
      this.$emit('deleteSource', sourceId);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

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
.source__delete svg
.source__edit svg
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
