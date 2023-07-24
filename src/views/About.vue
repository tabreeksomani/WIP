<template>
    <div id="story">
        <OurStory></OurStory>
    </div>
    <div style="min-height:100vh" id="team">
        <h1>Our Team</h1>
        <OurTeam></OurTeam>
    </div>
</template>

<script>
import OurTeam from '@/components/OurTeam.vue';
import OurStory from '@/components/OurStory.vue';
export default {
    name: 'AboutPage',
    components: {
        OurTeam,
        OurStory
    }
};
</script>
