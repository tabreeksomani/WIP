<template>
    <div class="membership-section">
        <div class="perks-section">
            <h1 class="section-title" style="color: #a30b37">
                Discover a Community Dedicated to Your Success
            </h1>

            <div class="membership-perks">
                <h3 class="perks-title">Membership Benefits:</h3>
                <ul class="perks-list">
                    <li>
                        Unlock Exclusive Mentorship Opportunities from Accomplished Women in Diverse Fields.
                    </li>
                    <li>
                        Join a Powerful Network of Like-minded Professionals, Fostering Meaningful Connections.
                    </li>
                    <li>
                        Be Part of an Empowering Movement, Driving Women's Growth and Advancement.
                    </li>
                    <li>
                        Experience Exclusive Events, Workshops, and Seminars to Enhance Your Personal and Professional
                        Growth.
                    </li>
                    <li>
                        Stay Informed with our Curated Newsletter, Packed with Latest News and Opportunities.
                    </li>
                    <li>
                        Receive Career Advancement Support, Tailored Guidance, and Networking Opportunities.
                    </li>
                    <li>
                        Benefit from Personalized Mentorship Programs, Guiding You towards Success.
                    </li>
                    <li>
                        Attend Professional Development Workshops, Sharpening Skills and Expanding Knowledge.
                    </li>
                    <li>
                        Engage in Exclusive Networking Events, Connecting with Industry Leaders and Collaborators.
                    </li>
                </ul>
            </div>
        </div>

        <div class="form-section">
            <div class="card">
                <img src="https://cdn.pixabay.com/photo/2018/12/10/10/21/earth-3866609_1280.jpg" alt="Membership Image"
                    class="card-image">
                <div class="card-body">
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
                            <input type="text" id="area-of-study" name="area-of-study"
                                placeholder="Area of Study / Occupation" required />
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
}
</script>
  
<style scoped>
.membership-section {
    padding: 40px;
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.perks-section {
    flex: 1;
    padding-right: 20px;
    text-align: left;
}

.perks-list {
    margin-left: 20px;
    margin-bottom: 20px;
    font-style: Montserrat;
    list-style: none;
    padding-left: 0;
}

.form-group.form-row {
    display: flex;
    justify-content: space-between;
}

.form-field {
    flex: 1;
    margin-right: 10px;
}

.perks-list li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 15px;
}

.perks-list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    width: 8px;
    height: 8px;
    background-color: #a30b37;
    border-radius: 50%;
}

.form-section {
    flex: 1;
    text-align: left;
}

.card {
    width: 100%;
    height: 80vh;
    background-color: #fff;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.card-image {
    height: 20Vh;
    width: 100%;
    object-fit: cover;
}

.card-body {
    padding: 20px;
}

.section-title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 30px;
}

.perks-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.form-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.form-group {
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
  