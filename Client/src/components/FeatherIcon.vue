<template>
  <svg>
    <use :href="getHref(icon)" />
  </svg>
</template>

<script>
import path from '@/assets/icons/feather-sprite.svg';

export default {
  name: 'FeatherIcon',
  props: ['icon'],
  methods: {
    getHref(icon) {
      return `${path}#${icon}`;
    },
  },
};
</script>
