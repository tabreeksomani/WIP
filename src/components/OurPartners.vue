<template>
    <div>
        <div class="impact-section">
            <h2 class="section-title">Our Impact</h2>
            <div class="stats">
                <div class="stat">
                    <div class="stat-value">1000+</div>
                    <div class="stat-label">Projects Completed</div>
                </div>
                <div class="stat">
                    <div class="stat-value">10,000+</div>
                    <div class="stat-label">Lives Impacted</div>
                </div>
                <div class="stat">
                    <div class="stat-value">500+</div>
                    <div class="stat-label">Volunteers Engaged</div>
                </div>
                <!-- Add more stats if needed -->
            </div>
        </div>

        <div class="partners-section">
            <h2 class="section-title">Our Partners</h2>
            <div class="partner-logos">
                <img v-for="(partner, index) in partners" :key="index" :src="partner.logo" alt="Partner Logo"
                    class="partner-logo" />
            </div>
        </div>
    </div>
</template>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.impact-section {
    background-color: #f7f7f7;
    padding: 40px 0;
    text-align: center;
}

.section-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 20px;
}

.stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.stat {
    width: 200px;
    margin: 20px;
}

.stat-value {
    font-size: 40px;
    font-weight: bold;
    color: #333;
}

.stat-label {
    font-size: 16px;
    color: #666;
}

.partners-section {
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
}

.partner-logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.partner-logo {
    max-width: 150px;
    max-height: 80px;
    margin: 10px;
}
</style>
  
<script>
export default {
    name: 'OurPartners',
    data() {
        return {
            partners: [
                { logo: 'partner1.png' },
                { logo: 'partner2.png' },
                { logo: 'partner3.png' },
                // Add more partner objects with their logo paths
            ],
        };
    },
};
</script>