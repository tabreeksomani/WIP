<template>
    <div class="volunteer-section" style="background-color: rgb(254, 253, 234);">
        <p class="volunteer-paragraph" style="color: #2E4052;">
            Are you passionate about making a difference in your community? We offer various opportunities for you to get
            involved
            and contribute your skills and expertise. Choose from the following ways to volunteer:
        </p>

        <div class="card-container">
            <div class="volunteer-card" style="background-color: white; border: 1px solid #ccc;">
                <h3 class="card-title" style="color: #A30B37;">Become a Mentor</h3>
                <p class="card-description" style="color: #2E4052;">
                    Help guide and support individuals in their personal and professional development journey. Share your
                    knowledge
                    and experiences to empower others to reach their goals.
                </p>
                <div class="card-benefits" style="color: #2E4052;">
                    <strong>Benefits:</strong>
                    <ul>
                        <li>Opportunity to make a meaningful impact in someone's life.</li>
                        <li>Develop mentoring and leadership skills.</li>
                        <li>Expand your network and connect with like-minded individuals.</li>
                    </ul>
                </div>
                <a href="#" class="cta-button">Apply Now</a>
            </div>

            <div class="volunteer-card" style="background-color: white; border: 1px solid #ccc;">
                <h3 class="card-title" style="color: #A30B37;">Lead / Host a Workshop</h3>
                <p class="card-description" style="color: #2E4052;">
                    Share your expertise by leading workshops and training sessions. Help others learn new skills and
                    enhance their
                    capabilities in a supportive and engaging environment.
                </p>
                <div class="card-benefits" style="color: #2E4052;">
                    <strong>Benefits:</strong>
                    <ul>
                        <li>Inspire and empower individuals through knowledge sharing.</li>
                        <li>Enhance your public speaking and teaching abilities.</li>
                        <li>Contribute to community development and women empowerment through sharing your knowledge.</li>
                    </ul>
                </div>
                <a href="#" class="cta-button">Get Started</a>
            </div>

            <div class="volunteer-card" style="background-color: white; border: 1px solid #ccc;">
                <h3 class="card-title" style="color: #A30B37;">Join Our Operations Team</h3>
                <p class="card-description" style="color: #2E4052;">
                    Join our operations team and contribute to the planning and execution of events and initiatives. Assist
                    with
                    logistics, communications, and other essential tasks to ensure the success of our projects.
                </p>
                <div class="card-benefits" style="color: #2E4052;">
                    <strong>Benefits:</strong>
                    <ul>
                        <li>Gain hands-on experience in event planning & management.</li>
                        <li>Collaborate with a diverse and passionate team.</li>
                        <li>Contribute to the success of impactful projects.</li>
                    </ul>
                </div>
                <a href="#" class="cta-button">Explore Opportunities</a>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.volunteer-section {
    margin: 20px;
    text-align: center;
}

.volunteer-paragraph {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
    ;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.volunteer-card {
    width: calc(33.33% - 20px);
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.card-description {
    font-size: 16px;
    line-height: 1.6;
    color: #2E4052;
}

.card-benefits {
    font-size: 14px;
    margin-top: 20px;
    color: #2E4052;
    text-align: left;
}

.card-benefits ul {
    padding-left: 20px;
    /* Add the list-style-type property to show bullets */
    list-style-type: disc;
}

.cta-button {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
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
  
<script>
export default {
    name: 'VolunteerPage',
    components: {
    }
}
</script>