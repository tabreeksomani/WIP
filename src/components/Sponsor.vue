<template>
    <div class="sponsor-page" style="background-color: rgb(254, 253, 234);">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="8">
                    <h1 class="page-title" style="color: #A30B37;">Sponsor Us</h1>
                    <p class="page-description" style="color: #2E4052;">
                        Your sponsorship can make a lasting impact on the lives of individuals and communities we serve. By
                        becoming a
                        sponsor, you join us in our mission to create positive change and empower those in need.
                    </p>
                </v-col>
            </v-row>

            <v-col justify="center">
                <!-- Sponsorship Packages -->
                <v-col cols="12" md="8">
                    <h2 class="section-title" style="color: #A30B37;">Sponsorship Packages</h2>
                    <v-col justify="center">
                        <!-- Gold Sponsor -->
                        <v-row cols="12" md="4">
                            <v-card class="sponsor-card gold" outlined>
                                <v-card-title class="sponsor-title">Gold Sponsor</v-card-title>
                                <v-card-text>
                                    <div class="package-icon">
                                        <v-icon color="#A30B37" size="64px">mdi-medal</v-icon>
                                    </div>
                                    <p class="benefits-title">Benefits:</p>
                                    <ul class="benefits-list">
                                        <li>All Silver Sponsor benefits</li>
                                        <li>Featured sponsor in marketing campaigns</li>
                                        <li>Special recognition at events</li>
                                    </ul>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="#A30B37" dark>Learn More</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-row>

                        <!-- Silver Sponsor -->
                        <v-row cols="12" md="4">
                            <v-card class="sponsor-card silver" outlined>
                                <v-card-title class="sponsor-title">Silver Sponsor</v-card-title>
                                <v-card-text>
                                    <div class="package-icon">
                                        <v-icon color="#A30B37" size="64px">mdi-medal</v-icon>
                                    </div>
                                    <p class="benefits-title">Benefits:</p>
                                    <ul class="benefits-list">
                                        <li>All Bronze Sponsor benefits</li>
                                        <li>Logo placement on event banners</li>
                                        <li>Complimentary event tickets</li>
                                    </ul>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="#A30B37" dark>Learn More</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-row>

                        <!-- Bronze Sponsor -->
                        <v-row cols="12" md="4">
                            <v-card class="sponsor-card bronze" outlined>
                                <v-card-title class="sponsor-title">Bronze Sponsor</v-card-title>
                                <v-card-text>
                                    <div class="package-icon">
                                        <v-icon color="#A30B37" size="64px">mdi-medal</v-icon>
                                    </div>
                                    <p class="benefits-title">Benefits:</p>
                                    <ul class="benefits-list">
                                        <li>Logo placement on our website</li>
                                        <li>Recognition in our event materials</li>
                                    </ul>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="#A30B37" dark>Learn More</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-row>
                    </v-col>
                </v-col>
            </v-col>

            <v-col justify="center">
                <!-- Contact Us -->
                <v-row cols="12" md="8">
                    <h2 class="section-title" style="color: #A30B37;">Contact Us</h2>
                    <v-card class="contact-card">
                        <v-card-text>
                            <p>If you are interested in becoming a sponsor or have any questions, please contact us:</p>
                            <p>Email: sponsorship@yourorganization.com</p>
                            <p>Phone: +1 (123) 456-7890</p>
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-col>
        </v-container>
    </div>
</template>
  
<style scoped>
.page-title {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
}

.page-description {
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
}

.section-title {
    font-size: 28px;
    font-weight: bold;
    color: #A30B37;
    margin-bottom: 10px;
}

.sponsor-card {
    margin: 10px;
    padding: 20px;
    min-width: 600px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.sponsor-card:hover {
    transform: scale(1.05);
}

.sponsor-title {
    font-size: 24px;
    font-weight: bold;
    color: #A30B37;
}

.package-icon {
    display: flex;
    justify-content: center;
}

.bronze {
    background-color: #CD7F32;
}

.silver {
    background-color: #C0C0C0;
}

.gold {
    background-color: #FFD700;
}

.benefits-title {
    font-size: 20px;
    font-weight: bold;
    color: #A30B37;
    margin-top: 10px;
}

.benefits-list {
    margin-left: 20px;
}

.contact-card {
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
  
<script>
export default {
    name: "SponsorPage",
};
</script>
  