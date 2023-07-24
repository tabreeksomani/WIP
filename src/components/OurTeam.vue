<template>
    <div class="our-team">
        <v-container>
            <v-row justify="center">
                <!-- Co-Presidents -->
                <v-col cols="12">
                    <h2 class="text-center">Co-Presidents</h2>
                </v-col>
                <v-col v-for="coPresident in coPresidents" :key="coPresident.name" cols="12" sm="6" md="4">
                    <v-card class="team-member" elevation="10">
                        <v-avatar size="150" class="avatar">
                            <v-img :src="coPresident.image" :alt="coPresident.name"></v-img>
                        </v-avatar>
                        <v-card-title class="text-h5 text-center">{{ coPresident.name }}</v-card-title>
                        <v-card-subtitle class="text-center">{{ coPresident.position }}</v-card-subtitle>
                    </v-card>
                </v-col>

                <!-- Board of Directors -->
                <v-col cols="12">
                    <h2 class="text-center">Board of Directors</h2>
                </v-col>
                <v-col v-for="index in 7" :key="index" cols="12" sm="6" md="4">
                    <v-card class="team-member" elevation="10">
                        <v-avatar size="150" class="avatar">
                            <!-- Use placeholder image URLs here -->
                            <v-img :src="getBoardMemberImage(index)" :alt="'Board Member ' + index"></v-img>
                        </v-avatar>
                        <v-card-title class="text-h5 text-center">Board Member {{ index }}</v-card-title>
                        <v-card-subtitle class="text-center">Board of Director</v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            coPresidents: [
                {
                    name: "Co-President 1",
                    position: "Co-President",
                    image: "https://via.placeholder.com/150", // Replace with actual co-president image URL
                },
                {
                    name: "Co-President 2",
                    position: "Co-President",
                    image: "https://via.placeholder.com/150", // Replace with actual co-president image URL
                },
            ],
        };
    },
    methods: {
        getBoardMemberImage(index) {
            // Use placeholder image URLs for board members
            return `https://via.placeholder.com/150?text=Board+Member+${index}`;
        },
    },
};
</script>
  
<style>
/* Customize the styles as per your preference */
.our-team {
    padding: 20px;
}

.team-member {
    margin: 10px;
    text-align: center;
    padding-top: 10px;
}

.avatar {
    margin: 0 auto;
}
</style>
  