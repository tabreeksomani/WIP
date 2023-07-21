<template>
    <feature-carousel></feature-carousel>
    <our-partners></our-partners>
    <WhoWeAre></WhoWeAre>


    <our-programs id="programs"></our-programs>
    <featured-content></featured-content>
    <get-involved></get-involved>
    <membership-section></membership-section>
</template>
  
<script>
import FeatureCarousel from '../components/Carousel.vue';
import OurPrograms from '../components/Programs.vue';
import WhoWeAre from '../components/WhoWeAre.vue';
import OurPartners from '../components/OurPartners.vue';
import FeaturedContent from '../components/FeaturedContent.vue';
import GetInvolved from '../components/GetInvolved.vue';
import MembershipSection from '../components/Membership.vue'

export default {
    name: 'HomePage',
    components: {
        FeatureCarousel,
        OurPrograms,
        WhoWeAre,
        FeaturedContent,
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