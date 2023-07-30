<template>
    <div class="donate-page" style="background-color: rgb(254, 253, 234);">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="8">
                    <h1 class="page-title" style="color: #A30B37;">Donate to Support Our Cause</h1>
                    <p class="page-description" style="color: #2E4052;">
                        Your generous donation will make a difference in the lives of countless individuals. With your
                        support,
                        we can continue our mission of empowering women and fostering positive change in communities.
                    </p>
                    <v-row justify="center">
                        <v-col cols="12" md="4">
                            <v-card class="stat-card">
                                <div class="stat-number">10,000+</div>
                                <div class="stat-label">Women Empowered</div>
                            </v-card>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-card class="stat-card">
                                <div class="stat-number">500+</div>
                                <div class="stat-label">Positive Change Initiatives</div>
                            </v-card>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-card class="stat-card">
                                <div class="stat-number">100+</div>
                                <div class="stat-label">Communities Transformed</div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>

                <!-- Donation Card -->
                <v-col cols="12" md="4">
                    <v-card class="donate-card"
                        style="border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                        <v-card-title class="donate-title" style="color: #A30B37;">Enter Donation Amount</v-card-title>
                        <v-card-text>
                            <v-text-field v-model="donationAmount" label="Amount (USD)" outlined
                                type="number"></v-text-field>
                        </v-card-text>

                        <v-card-title class="donate-title" style="color: #A30B37;">Select Donation Type</v-card-title>
                        <v-radio-group v-model="donationType" style="color: #2E4052;">
                            <v-radio label="One-time" value="oneTime"></v-radio>
                            <v-radio label="Recurring Monthly" value="recurringMonthly"></v-radio>
                            <v-radio label="Recurring Yearly" value="recurringYearly"></v-radio>
                        </v-radio-group>

                        <v-card-actions>
                            <v-btn color="#A30B37" dark @click="donate">Donate Now</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>

            <!-- Vertical Statistics (Stacked Column) -->

        </v-container>
    </div>
</template>
  
<script>
export default {
    name: "DonatePage",
    data() {
        return {
            donationAmount: 0,
            donationType: "oneTime", // Default to one-time donation
        };
    },
    methods: {
        donate() {
            // Implement your donation processing logic here
            // You can access the donationAmount and donationType to handle the donation type
            // For this example, we'll just show an alert to simulate the donation process
            const typeText =
                this.donationType === "oneTime"
                    ? "one-time"
                    : this.donationType === "recurringMonthly"
                        ? "monthly recurring"
                        : "yearly recurring";

            alert(
                `Thank you for donating $${this.donationAmount} as a ${typeText} donation! Your support is greatly appreciated.`
            );
        },
    },
};
</script>
  
<style scoped>
.page-title {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
}

.page-description {
    font-size: 18px;
    text-align: center;
    margin-bottom: 0px;
}

.donate-card {
    padding: 20px;
    text-align: center;
}

.donate-title {
    font-size: 24px;
    font-weight: bold;
}

.donate-card v-btn {
    margin-top: 20px;
}

/* Styling for Vertical Statistics */
.stat-card {
    padding: 20px;
    text-align: center;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 8px;
    min-height: 150px;
    min-width: 250px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
}

.stat-number {
    font-size: 32px;
    font-weight: bold;
    color: #A30B37;
}

.stat-label {
    font-size: 18px;
    color: #2E4052;
}
</style>
  