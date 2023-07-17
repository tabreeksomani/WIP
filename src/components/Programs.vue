<template>
    <div class="card-container">
        <h2>Our Programs</h2>
        <v-card width="344">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>

            <v-card-title> Podcast </v-card-title>

            <v-card-subtitle> Inspiring Confidence, Shaping the Future </v-card-subtitle>

            <v-card-actions>
                <v-btn color="orange-lighten-2" variant="text" class="customLearn"> Explore </v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show1 ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show1 = !show1"
                    class="customArrow"></v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show1">
                    <v-divider></v-divider>

                    <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he
                        could deliver. You won't have time for sleeping, soldier, not with all
                        the bed making you'll be doing. Then we'll go with that data file!
                        Hey, you add a one and two zeros to that or we walk! You're going to
                        do his laundry? I've got to find a way to escape.
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
        <v-card width="344">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>

            <v-card-title> Dear Ally </v-card-title>

            <v-card-subtitle> Advice from your big sister, one question away </v-card-subtitle>

            <v-card-actions>
                <v-btn color="orange-lighten-2" variant="text" class="customLearn"> Explore </v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show2 ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show2 = !show2"
                    class="customArrow"></v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show2">
                    <v-divider></v-divider>

                    <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he
                        could deliver. You won't have time for sleeping, soldier, not with all
                        the bed making you'll be doing. Then we'll go with that data file!
                        Hey, you add a one and two zeros to that or we walk! You're going to
                        do his laundry? I've got to find a way to escape.
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
        <v-card width="344">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>

            <v-card-title> Workshops </v-card-title>

            <v-card-subtitle> Life School 101 </v-card-subtitle>

            <v-card-actions>
                <v-btn color="orange-lighten-2" variant="text" class="customLearn"> Explore </v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show3 ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show3 = !show3"
                    class="customArrow"></v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show3">
                    <v-divider></v-divider>

                    <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he
                        could deliver. You won't have time for sleeping, soldier, not with all
                        the bed making you'll be doing. Then we'll go with that data file!
                        Hey, you add a one and two zeros to that or we walk! You're going to
                        do his laundry? I've got to find a way to escape.
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </div>
</template>
  
<script>
export default {
    name: 'OurPrograms',
    data: () => ({
        show1: false,
        show2: false,
        show3: false,
    }),
}
</script>
  
<style scoped>
.customeLearn {
    background-color: white;
}

.customArrow {
    color: black;
}

.card-container {
    display: flex;
    justify-content: center;
    padding: 15px;
    margin-left: 30px;
    margin-right: 30px;
    height: max-content;
}

.v-card {
    margin-left: 40px;
}
</style>
