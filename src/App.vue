<template>
  <app-navigation></app-navigation>
  <feature-carousel></feature-carousel>>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import FeatureCarousel from '@/components/Carousel.vue';
export default {
  name: 'App',
  components: {
    AppNavigation,
    FeatureCarousel
  }
};
</script>

<style scoped>
.v-app-bar {
  font-family: 'Montserrat', sans-serif;
}

.v-btn,
.v-list-item {
  font-family: 'Montserrat', sans-serif !important;
}
</style>