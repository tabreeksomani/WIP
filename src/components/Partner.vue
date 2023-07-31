<template>
    <div class="partner-page" style="background-color: rgb(254, 253, 234);">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="8">
                    <h1 class="page-title" style="color: #A30B37;">Partner with Us</h1>
                    <p class="page-description" style="color: #2E4052;">
                        We believe in the power of collaboration and are always open to forming meaningful partnerships.
                        Together, we can
                        create a positive impact on society and transform lives.
                    </p>
                </v-col>
            </v-row>

            <v-row justify="center">
                <!-- Partnership Benefits -->
                <v-col cols="12" md="8">
                    <h2 class="section-title" style="color: #A30B37;">Benefits of Partnering with Us</h2>
                    <v-card class="benefits-card" outlined>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="4">
                                    <div class="benefits-icon">
                                        <v-icon color="#A30B37" size="48px">mdi-handshake</v-icon>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="8">
                                    <h3 class="benefits-title">Collaboration Opportunities</h3>
                                    <p>Together, we can design and implement impactful initiatives that address social
                                        challenges.</p>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>

                    <v-card class="benefits-card" outlined>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="4">
                                    <div class="benefits-icon">
                                        <v-icon color="#A30B37" size="48px">mdi-gift</v-icon>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="8">
                                    <h3 class="benefits-title">Exclusive Offers</h3>
                                    <p>Our partners enjoy exclusive benefits and recognition at events and marketing
                                        campaigns.</p>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>

                    <v-card class="benefits-card" outlined>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="4">
                                    <div class="benefits-icon">
                                        <v-icon color="#A30B37" size="48px">mdi-star</v-icon>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="8">
                                    <h3 class="benefits-title">Promote Your Brand</h3>
                                    <p>Partnering with us provides a platform to increase your brand visibility and
                                        goodwill.</p>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <v-row justify="center">
                <!-- Contact Us -->
                <v-col cols="12" md="8">
                    <h2 class="section-title" style="color: #A30B37;">Interested in Partnering?</h2>
                    <v-card class="contact-card">
                        <v-card-text>
                            <p>If you are interested in partnering with us or have any inquiries, please reach out to us:
                            </p>
                            <p>Email: partnership@yourorganization.com</p>
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

.benefits-card {
    margin: 10px;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.benefits-card:hover {
    transform: scale(1.05);
}

.benefits-title {
    font-size: 24px;
    font-weight: bold;
    color: #A30B37;
}

.benefits-icon {
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
    name: 'PartnerPage',
    components: {
    }
}
</script>