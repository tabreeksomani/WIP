<template>
  <app-navigation></app-navigation>

  <feature-carousel></feature-carousel>
  <WhoWeAre></WhoWeAre>

  <our-programs></our-programs>
  <PodcastEpisodes></PodcastEpisodes>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import FeatureCarousel from '@/components/Carousel.vue';
import OurPrograms from '@/components/Programs.vue';
import PodcastEpisodes from '@/components/Podcast.vue';
import WhoWeAre from './components/WhoWeAre.vue';

export default {
  name: 'App',
  components: {
    AppNavigation,
    FeatureCarousel,
    OurPrograms,
    PodcastEpisodes,
    WhoWeAre
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