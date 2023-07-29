<template>
    <div class="get-involved-section" style="background-color: rgb(254 253 234);">
        <h2 class="section-title">Empowerment Through Action</h2>

        <b>Get Involved and Empower Women Leaders!</b> Join our movement for women empowerment and nurturing the next
        generation of female leaders. Explore opportunities to volunteer, become a valued partner, donate, sponsor, or
        organize fundraising events. Together, we can ignite change and foster a world where women thrive and lead with
        strength and compassion.

        <div class="get-involved-grid">
            <div class="get-involved-card" v-for="(item, index) in getInvolvedItems" :key="index">
                <svg-icon type="mdi" :path=item.icon size="100"></svg-icon>
                <h3 class="get-involved-title">{{ item.title }}</h3>
                <p class="get-involved-description">{{ item.description }}</p>
                <a :href="item.href" class="cta-button">Learn More</a>
            </div>
        </div>
    </div>
</template>
  
<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountTieWoman, mdiHandshake, mdiAccountGroup, mdiCharity, mdiHandCoin } from '@mdi/js';

export default {
    name: 'GetInvolved',
    components: {
        SvgIcon,
    },
    data() {
        return {
            getInvolvedItems: [
                { title: 'Join Our Team', icon: mdiAccountTieWoman, description: 'Become a mentor, lead a workshop, or explore volunteering opportunities with our operations team!', href: '/getinvolved#volunteer' },
                { title: 'Donate', icon: mdiCharity, description: 'Make a meaningful impact and support our cause by making a financial contribution.', href: '/getinvolved#donate' },
                { title: 'Partner with Us', icon: mdiHandshake, description: 'Join forces with us as a valued partner and help us make a lasting impact in communities.', href: '/getinvolved#partner' },
                { title: 'Sponsor', icon: mdiAccountGroup, description: 'Empower positive change as a sponsor and partner with us to make a significant impact in the lives of those we serve.', href: '/getinvolved#sponsor' },
                { title: 'Fundraise for Us', icon: mdiHandCoin, description: 'Become a catalyst for change by organizing fundraising events and helping us raise vital funds for our initiatives.', href: '/getinvolved#fundraise' },
            ],
        };
    },
};
</script>
  
<style scoped>
.get-involved-section {
    font-family: 'Montserrat', sans-serif;
    padding: 40px;
    color: #2E4052;
    text-align: center;
}

.section-title {
    width: 100%;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
    color: white;
    background-color: #A30B37;
    padding: 10px 0;
    text-align: center;
    border-radius: 8px;
}

.get-involved-grid {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* Responsive grid: Adjust the column width based on screen size */
    grid-gap: 20px;
}

.get-involved-card {
    background-color: #ffffff;
    height: 360px;
    position: relative;
    border: 1px solid #ccc;
    color: #2E4052;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    /* Add the transition property */

}

.get-involved-card:hover {
    transform: scale(1.08);
    /* Apply the zoom effect on hover */
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
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
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
    background-color: #2E4052;
}
</style>
  