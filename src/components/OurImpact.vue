<template>
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
</template>
  
<script>
export default {
    name: 'OurImpact',
};
</script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.impact-section {
    background-color: rgb(254 253 234);
    padding: 10px 0;
    text-align: center;
}

.section-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 0;
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
</style>
  