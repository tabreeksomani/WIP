<template>
    <span>
        <v-toolbar app color="#A30B37" class="custom-app-bar">
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>
                {{ appTitle }}
            </v-toolbar-title>
            <v-btn flat class="hidden-sm-and-down">Home</v-btn>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props">
                        About
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in aboutItems" :key="index" :value="index">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn flat class="hidden-sm-and-down">Programs</v-btn>
            <v-btn flat class="hidden-sm-and-down">Podcast</v-btn>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props">
                        Get Involved
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in getInvolvedItems" :key="index" :value="index">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn flat class="hidden-sm-and-down">Contact Us</v-btn>

            <v-spacer class="hidden-sm-and-down"></v-spacer>

            <v-btn class="custom-btn">Join Our Community</v-btn>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'The WIP Initiative',
            drawer: false,
            aboutItems: [
                { title: 'Our Story' },
                { title: 'Team' },
                { title: 'Our Mission' }
            ],
            getInvolvedItems: [
                { title: 'Volunteer' },
                { title: 'Donate' },
                { title: 'Sponsor Us' },
                { title: 'Partner with Us' },
                { title: 'Fundraise for Us' }
            ],
        };
    }

};
</script>

<style scoped>
.custom-app-bar {
    box-shadow: 0 2px 4px 0 rgba(163, 11, 55, 0.5);
    color: white;
    font-family: 'Montserrat', sans-serif;
}

.custom-btn {
    background-color: #FFF5E6;
    color: rgba(163, 11, 55);
}
</style>