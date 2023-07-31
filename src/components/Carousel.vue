<template>
    <v-carousel :show-arrows="false" hide-delimiters style="background-color: rgb(254 253 234);">
        <v-carousel-item src="progress.png" contain></v-carousel-item>


    </v-carousel>
</template>

<script>
import BASE_URL from '../../jsconfig.json';

export default {

    name: 'FeatureCarousel',
    data() {
        return {
            imageURL: BASE_URL + 'progress.png'
        }
    }
};
</script>

<style scoped></style>