<template>
    <div>
        <h1 class="section-title" style="color: #a30b37">
            Discover a Community Dedicated to Your Success
        </h1>
        <div class="membership-section">
            <div class="perks-section">
                <h2 class="text-center">Membership Benefits</h2>


                <div class="membership-grid">
                    <div class="membership-card" v-for="(benefit, index) in benefits" :key="index">
                        <i :class="benefit.iconClass" class="benefit-icon"></i>
                        <p class="benefit-description">{{ benefit.description }}</p>
                    </div>
                </div>
            </div>

            <div class="form-section">
                <div class="form-card">
                    <h3 class="form-title">Get Started with a FREE Membership Today!</h3>
                    <form>
                        <div class="form-group form-row">
                            <div class="form-field">
                                <input type="text" id="first-name" name="first-name" placeholder="First Name" required />
                            </div>
                            <div class="form-field">
                                <input type="text" id="last-name" name="last-name" placeholder="Last Name" required />
                            </div>
                        </div>

                        <div class="form-group">
                            <input type="email" id="email" name="email" placeholder="Email" required />
                        </div>

                        <div class="form-group">
                            <input type="text" id="area-of-study" name="area-of-study" placeholder="Role" required />
                        </div>
                        <div class="form-group">
                            <input type="text" id="area-of-study" name="area-of-study" placeholder="Industry" required />
                        </div>
                        <div class="form-group">
                            <select id="membership-type" name="membership-type" required>
                                <option value="student">Student</option>
                                <option value="professional">Professional</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <!-- Add more form fields as needed -->

                        <button type="submit" class="cta-button">Become a Member</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'MembershipSection',
    data() {
        return {
            benefits: [
                {
                    iconClass: 'fas fa-users',
                    description: 'Unlock Exclusive Mentorship Opportunities from Accomplished Women in Diverse Fields.'
                },
                {
                    iconClass: 'fas fa-network-wired',
                    description: 'Join a Powerful Network of Like-minded Professionals, Fostering Meaningful Connections.'
                },
                {
                    iconClass: 'fas fa-fist-raised',
                    description: "Be Part of an Empowering Movement, Driving Women's Growth and Advancement."
                },
                {
                    iconClass: 'fas fa-calendar-alt',
                    description: 'Experience Exclusive Events, Workshops, and Seminars to Enhance Your Personal and Professional Growth.'
                },
                {
                    iconClass: 'fas fa-newspaper',
                    description: 'Stay Informed with our Curated Newsletter, Packed with Latest News and Opportunities.'
                },
                {
                    iconClass: 'fas fa-handshake',
                    description: 'Receive Career Advancement Support, Tailored Guidance, and Networking Opportunities.'
                },
            ],
        };
    },
}
</script>
  
<style scoped>
.membership-section {
    padding: 40px;
    background-color: #DEFFFC;
    color: #2E4052;

    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.section-title {
    font-size: 32px;
    background-color: #DEFFFC;
    padding-top: 20px;
    font-weight: bold;
    text-align: center;
}

.perks-section {
    flex: 1;
    padding-right: 20px;
    text-align: left;
}

.membership-grid {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}

.membership-card {
    background-color: white;
    border: 1px solid #ccc;
    color: #2E4052;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
    /* Add the transition property */

}

.membership-card:hover {
    background-color: #a30b37;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
}



.benefit-icon {
    font-size: 40px;
    margin-bottom: 10px;
    color: #a30b37;

}

.benefit-description {
    font-size: 16px;
    margin-bottom: 10px;
}

.form-section {
    flex: 1;
    text-align: left;
}

.form-card {
    background-color: #ffffff;
    border: 1px solid #ccc;
    color: #2E4052;
    border-radius: 8px;
    padding: 20px;
}

.form-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.form-group {
    margin-bottom: 20px;
}

.form-field {
    margin-bottom: 20px;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.cta-button {
    display: inline-block;
    padding: 12px 24px;
    background-color: #a30b37;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 18px;
    transition: background-color 0.3s ease;
    cursor: pointer;
}

.cta-button:hover {
    background-color: #7c0622;
}
</style>
  