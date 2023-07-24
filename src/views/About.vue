<template>
    <div style="height:100vh" id="story">
        <h1>Our Story</h1>
    </div>
    <div style="min-height:100vh" id="team">
        <h1>Our Team</h1>
        <OurTeam></OurTeam>
    </div>
</template>

<script>
import OurTeam from '@/components/OurTeam.vue';
export default {
    name: 'AboutPage',
    components: {
        OurTeam
    }
};
</script>
