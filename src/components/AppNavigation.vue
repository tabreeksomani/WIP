<template>
    <span>
        <v-toolbar app color="#A30B37" class="custom-app-bar">
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>

                <div class="subtext">

                    <img src="/girl.png" height="25" />
                    Women in Progress
                </div>
            </v-toolbar-title>
            <v-btn flat class="hidden-sm-and-down" to="/">Home</v-btn>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props">
                        About
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in aboutItems" :key="index" :value="index" :to="item.link">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn flat to="/#programs" class="hidden-sm-and-down">Programs</v-btn>

            <v-btn flat class="hidden-sm-and-down" to="/podcast">Podcast</v-btn>
            <v-btn flat class="hidden-sm-and-down" to="/blog">Blog</v-btn>

            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props">
                        Get Involved
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in getInvolvedItems" :key="index" :value="index"
                        @click=goToTab(item.href)>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn flat class="hidden-sm-and-down" to="/contact">Contact Us</v-btn>

            <v-spacer class="hidden-sm-and-down"></v-spacer>

            <v-btn class="custom-btn" to="/#membership"><b>Join Our Community</b></v-btn>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    computed: {
        isHomeActive() {
            return this.$route.path === '/'; // Replace '/' with the correct path for your home page
        },
        isProgramsActive() {
            // Replace 'programs' with the correct ID or anchor link of your 'Programs' section
            return this.$route.hash === '#programs';
        },
    },
    data() {
        return {
            appTitle: 'The WIP Initiative',
            drawer: false,
            aboutItems: [
                {
                    title: 'Our Story',
                    link: '/about#story'
                },
                {
                    title: 'Our Team',
                    link: '/about#team'
                },
                {
                    title: 'Our Mission',
                    link: '/about#mission'
                }
            ],
            getInvolvedItems: [
                { title: 'Volunteer', href: '#volunteer' },
                { title: 'Donate', href: '#donate' },
                { title: 'Sponsor Us', href: '#sponsor' },
                { title: 'Partner with Us', href: '#partner' },
                { title: 'Fundraise for Us', href: '#fundraise' }
            ],
        };
    },
    methods: {
        goToTab(tabhref) {
            this.$router.push({ path: '/getinvolved', hash: tabhref });
        },

    }
};
</script>

<style scoped>
.custom-app-bar {
    box-shadow: 0 2px 4px 0 rgba(163, 11, 55, 0.5);
    color: white;
    font-family: 'Montserrat', sans-serif;
}

.mr-3 {
    margin: 0px;
}

.subtext {
    font-size: 15px;
    color: white;
    /* Fancy color */
    font-weight: bold;
    /* Fancy font weight */
    font-family: "Helvetica Neue", sans-serif;
    /* Fancy font family */
    text-transform: uppercase;
    /* Uppercase the text */
    letter-spacing: 2px;
    /* Add some letter spacing */
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    /* Add a subtle text shadow */
    animation: pulse 2s infinite;
    /* Add a pulse animation */
}


.custom-btn {
    background-color: #FFF5E6;
    color: rgba(163, 11, 55);
}
</style>