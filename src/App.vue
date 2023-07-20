<template>
  <app-navigation></app-navigation>

  <feature-carousel></feature-carousel>
  <our-partners></our-partners>
  <WhoWeAre></WhoWeAre>


  <our-programs></our-programs>
  <PodcastEpisodes></PodcastEpisodes>
  <featured-content></featured-content>
  <get-involved></get-involved>
  <membership-section></membership-section>
  <page-footer></page-footer>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import FeatureCarousel from '@/components/Carousel.vue';
import OurPrograms from '@/components/Programs.vue';
import PodcastEpisodes from '@/components/Podcast.vue';
import WhoWeAre from './components/WhoWeAre.vue';
import PageFooter from './components/Footer.vue';
import OurPartners from './components/OurPartners.vue';
import FeaturedContent from './components/FeaturedContent.vue';
import GetInvolved from './components/GetInvolved.vue';
import MembershipSection from './components/Membership.vue';

export default {
  name: 'App',
  components: {
    AppNavigation,
    FeatureCarousel,
    OurPrograms,
    PodcastEpisodes,
    WhoWeAre,
    FeaturedContent,
    PageFooter,
    OurPartners,
    GetInvolved,
    MembershipSection
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