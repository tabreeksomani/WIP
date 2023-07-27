<template>
    <div class="get-involved-section" style="background-color: #FFF5E6;">
        <h2 class="section-title">Get Involved</h2>

        <p>Lorem ipusm</p>

        <div class="get-involved-grid">
            <div class="get-involved-card">
                <svg-icon type="mdi" :path="volunteer" size="100"></svg-icon>
                <h3 class="get-involved-title">Join Our Team</h3>
                <p class="get-involved-description">
                    Become a mentor, lead a workshop, or explore volunteering opportunities with our operations team!
                </p>
                <a href="/getinvolved/volunteer" class="cta-button">Learn More</a>
            </div>

            <div class="get-involved-card">
                <svg-icon type="mdi" :path="partner" size="100"></svg-icon>
                <h3 class="get-involved-title">Partner with Us</h3>
                <p class="get-involved-description">
                    Join us in making a positive impact by becoming a valued partner.
                </p>
                <a href="/getinvolved/Partner%20with%20Us" class="cta-button">Learn More</a>
            </div>


            <div class="get-involved-card">
                <svg-icon type="mdi" :path="donate" size="100"></svg-icon>
                <h3 class="get-involved-title">Donate</h3>
                <p class="get-involved-description">
                    Support our cause by making a financial contribution.
                </p>
                <a href="/getinvolved/donate" class="cta-button">Learn More</a>
            </div>

            <div class="get-involved-card">
                <svg-icon type="mdi" :path="sponsor" size="100"></svg-icon>
                <h3 class="get-involved-title">Sponsor</h3>
                <p class="get-involved-description">
                    Partner with us as a sponsor and help us create a positive impact.
                </p>
                <a href="getinvolved/Sponsor%20Us" class="cta-button">Learn More</a>
            </div>

            <div class="get-involved-card">
                <svg-icon type="mdi" :path="fundraise" size="100"></svg-icon>
                <h3 class="get-involved-title">Fundraise for Us</h3>
                <p class="get-involved-description">
                    Organize fundraising events and help raise funds for our initiatives.
                </p>
                <a href="getinvolved/Fundraise%20for%20Us" class="cta-button">Learn More</a>
            </div>
        </div>

    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountTieWoman, mdiHandshake, mdiAccountGroup, mdiCharity, mdiHandCoin } from '@mdi/js';

export default {
    name: "GetInvolved",
    components: {
        SvgIcon
    },
    data() {
        return {
            volunteer: mdiAccountTieWoman,
            partner: mdiHandshake,
            donate: mdiCharity,
            sponsor: mdiAccountGroup,
            fundraise: mdiHandCoin
        }
    }
}
</script>

  
<style scoped>
.get-involved-section {
    padding: 40px;
    text-align: center;
}

.section-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.get-involved-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
}

.get-involved-card {
    background-color: #ffffff;
    border: 1px solid #ccc;
    color: #2E4052;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
}

.get-involved-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

.get-involved-description {
    margin-bottom: 10px;
}

.get-involved-card img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-bottom: 10px;
}

.cta-button {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #A30B37;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: darkblue;
}

.newsletter-section {
    margin-top: 40px;
    text-align: center;
}

.newsletter-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.newsletter-description {
    margin-bottom: 10px;
}

.newsletter-form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}

.newsletter-form input[type="email"] {
    padding: 8px;
    width: 250px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
}

.newsletter-form button {
    display: inline-block;
    padding: 8px 16px;
    background-color: blue;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.newsletter-form button:hover {
    background-color: darkblue;
}
</style>