<template>
    <div class="our-story">
        <v-container>
            <h2 class="text-center">Our Story</h2>

            <!-- Co-Founders' Stories -->
            <v-row>
                <!-- Co-Founder 1 -->
                <v-col cols="12" md="6">
                    <div class="co-founder-card">
                        <v-avatar size="150" class="top-center-avatar">
                            <v-img src="https://via.placeholder.com/150" alt="Co-Founder 1"></v-img>
                        </v-avatar>
                        <div class="quote">
                            <blockquote>
                                <v-icon color="primary" class="quote-icon">mdi-format-quote-open</v-icon>

                                <p>{{ coFounder1.story }}</p>
                                <v-icon color="primary" class="quote-icon">mdi-format-quote-close</v-icon>

                            </blockquote>
                            <h3 class="co-founder-name">{{ coFounder1.name }}</h3>
                        </div>
                    </div>
                </v-col>

                <!-- Co-Founder 2 -->
                <v-col cols="12" md="6">
                    <div class="co-founder-card">
                        <v-avatar size="150" class="top-center-avatar">
                            <v-img src="https://via.placeholder.com/150" alt="Co-Founder 2"></v-img>
                        </v-avatar>
                        <div class="quote">
                            <v-icon color="primary" class="quote-icon">mdi-format-quote-open</v-icon>
                            <blockquote>
                                <p>{{ coFounder2.story }}</p>
                            </blockquote>
                            <h3 class="co-founder-name">{{ coFounder2.name }}</h3>
                        </div>
                    </div>
                </v-col>
            </v-row>

            <!-- Picture of Co-Founders Together -->
            <v-row>
                <v-col cols="12" class="text-center">
                    <v-img src="/path/to/cofounders_together.jpg" alt="Co-Founders Together" height="300"></v-img>
                </v-col>
            </v-row>

            <!-- Shared Journey Section -->
            <v-row>
                <v-col cols="12">
                    <v-card class="story-card" elevation="5">
                        <v-card-text>
                            <h3 class="text-center">Our Journey Together</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae congue orci, a
                                ullamcorper erat.
                                Sed luctus, ligula sit amet venenatis sodales, orci odio varius libero, vitae pharetra
                                lectus velit
                                sit amet massa. Nam iaculis id orci ac varius. Suspendisse eleifend, purus eu consequat
                                congue, massa
                                ligula iaculis felis, vel accumsan mauris tortor in velit. Fusce gravida, elit nec rutrum
                                luctus, neque
                                justo pharetra sapien, vitae venenatis lorem dui eu mauris. Suspendisse potenti. Vestibulum
                                sagittis
                                ligula ac leo suscipit, vitae ultrices quam auctor. Etiam vulputate massa eu lorem hendrerit
                                dignissim.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <!-- Signoff with Signatures -->
            <v-row>
                <v-col cols="12">
                    <div class="signoff">
                        <p class="text-center">Thank you for being part of our journey.</p>
                        <div class="signature-container">
                            <div class="signature">
                                <span>Signature of Co-Founder 1</span>
                            </div>
                            <div class="signature">
                                <span>Signature of Co-Founder 2</span>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            coFounder1: {
                name: "Co-Founder 1",
                image: "https://via.placeholder.com/150", // Replace with actual image URL or use placeholders
                story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae congue orci...",
            },
            coFounder2: {
                name: "Co-Founder 2",
                image: "https://via.placeholder.com/150", // Replace with actual image URL or use placeholders
                story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae congue orci...",
            },
        };
    },
};
</script>
  
<style>
/* Customize the styles as per your preference */
.our-story {
    padding: 20px;
}

.co-founder-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.top-center-avatar {
    position: relative;
    margin-bottom: -75px;
    /* Adjust this value based on the co-founder image size */
}

.quote-icon {
    position: absolute;
    top: -10px;
    /* Adjust this value to move the icon up or down */
    left: 50%;
    transform: translateX(-50%);
    font-size: 32px;
    /* Adjust the font size of the quote icon */
}

.quote {
    background-color: #f7f7f7;
    border-radius: 10px;
    text-align: center;
    margin-top: 20px;
}

blockquote {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.co-founder-name {
    font-size: 1.2rem;
    margin-top: 10px;
}

.text-center {
    text-align: center;
}

.signoff {
    text-align: center;
    margin-top: 30px;
}

.signature-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.signature {
    padding: 10px;
    border-bottom: 1px solid #000;
    margin: 0 10px;
}

.signature span {
    font-style: italic;
}
</style>
  