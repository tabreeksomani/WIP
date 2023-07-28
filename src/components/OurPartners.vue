<template>
    <div class="partners-section">
        <h2 class="section-title">Our Partners</h2>
        <div class="partner-logos">
            <img v-for="(partner, index) in partners" :key="index" :src="partner.logo" alt="Partner Logo"
                class="partner-logo" />
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'OurPartners',
    data() {
        return {
            partners: [
                { logo: '/ubc.png' },
                { logo: '/toast.png' },
                { logo: '/microsoft.png' },
                { logo: '/amazon.png' },

                // Add more partner objects with their logo paths
            ],
        };
    },
};
</script>
  
<style>
.partners-section {
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #DEFFFC;
}

.partner-logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.partner-logo {
    max-height: 40px;
    min-height: 10px;
    margin: 10px;
}
</style>
  