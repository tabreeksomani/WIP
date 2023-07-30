<template>
    <div class="fundraise-page" style="background-color: rgb(254, 253, 234);">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="8">
                    <h1 class="page-title" style="color: #A30B37;">Fundraise for Us</h1>
                    <p class="page-description" style="color: #2E4052;">
                        Your fundraising efforts can make a significant impact on the lives of those in need. By raising
                        funds for our
                        cause, you become a catalyst for positive change in society.
                    </p>
                </v-col>
            </v-row>

            <v-row justify="center">
                <!-- Fundraising Tips -->
                <v-col cols="12" md="8">
                    <h2 class="section-title" style="color: #A30B37;">Fundraising Tips</h2>
                    <v-card class="fundraising-tips-card" outlined>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="4">
                                    <div class="tip-icon">
                                        <v-icon color="#A30B37" size="48px">mdi-lightbulb</v-icon>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="8">
                                    <h3 class="tip-title">Set a Clear Goal</h3>
                                    <p>Define a specific fundraising goal to motivate your donors and track your progress.
                                    </p>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>

                    <v-card class="fundraising-tips-card" outlined>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="4">
                                    <div class="tip-icon">
                                        <v-icon color="#A30B37" size="48px">mdi-bullhorn</v-icon>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="8">
                                    <h3 class="tip-title">Spread the Word</h3>
                                    <p>Use social media and other platforms to share your fundraising campaign and reach a
                                        broader audience.</p>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>

                    <v-card class="fundraising-tips-card" outlined>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="4">
                                    <div class="tip-icon">
                                        <v-icon color="#A30B37" size="48px">mdi-heart</v-icon>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="8">
                                    <h3 class="tip-title">Share the Impact</h3>
                                    <p>Showcase the positive impact of your fundraising efforts to inspire more people to
                                        donate.</p>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <v-row justify="center">
                <!-- Contact Us -->
                <v-col cols="12" md="8">
                    <h2 class="section-title" style="color: #A30B37;">Start Fundraising Today</h2>
                    <v-card class="contact-card">
                        <v-card-text>
                            <p>If you are ready to start fundraising for our cause or have any inquiries, please contact us:
                            </p>
                            <p>Email: fundraising@yourorganization.com</p>
                            <p>Phone: +1 (123) 456-7890</p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
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

.fundraising-tips-card {
    margin: 10px;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.fundraising-tips-card:hover {
    transform: scale(1.05);
}

.tip-title {
    font-size: 24px;
    font-weight: bold;
    color: #A30B37;
}

.tip-icon {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
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
    name: 'FundraisePage',
    components: {
    }
}
</script>