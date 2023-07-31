<template>
    <div style="background-color: rgb(254, 253, 234);">
        <v-tabs v-model="activeTab" grow>
            <v-tab v-for="(item, index) in tabs" :key="index" @click="goToTab(item.href)">
                {{ item.title }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="activeTab">
            <v-tab-item v-for="(item, index) in tabs" :key="index">
                <v-card-text v-if="activeTab === index">
                    <component :is="item.content" style="width: 100%; margin:0px"></component>
                </v-card-text>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>
  
<script>
import VolunteerPage from "@/components/Volunteer.vue";
import DonatePage from "@/components/Donate.vue";
import SponsorPage from "@/components/Sponsor.vue";
import PartnerPage from "@/components/Partner.vue";
import FundraisePage from "@/components/Fundraise.vue";

export default {
    name: "GetInvolved",
    components: {
        VolunteerPage,
    },
    data() {
        return {
            tabs: [
                {
                    title: "Volunteer",
                    content: VolunteerPage,
                    href: "#volunteer",
                },
                {
                    title: "Donate",
                    content: DonatePage,
                    href: "#donate",
                },
                {
                    title: "Sponsor Us",
                    content: SponsorPage,
                    href: "#sponsor",
                },
                {
                    title: "Partner with Us",
                    content: PartnerPage,
                    href: "#partner",
                },
                {
                    title: "Fundraise for Us",
                    content: FundraisePage,
                    href: "#fundraise",
                },
            ],
            activeTab: 0, // Set the initial active tab index
        };
    },
    created: function () {
        // Update the active tab based on the hash in the URL
        this.updateActiveTabFromHash();
    },
    watch: {
        // Watch for hash changes and update the active tab accordingly
        "$route.hash": "updateActiveTabFromHash",
    },
    methods: {
        goToTab(tabIndex) {
            this.$router.push({ path: "/getinvolved", hash: tabIndex });
        },
        updateActiveTabFromHash() {
            if (this.$route.path === "/getinvolved") {
                const hash = this.$route.hash;
                const foundTab = this.tabs.find(
                    (tab) => tab.href.toLowerCase() === hash.toLowerCase()
                );
                this.activeTab = foundTab ? this.tabs.indexOf(foundTab) : 0;
            }
        },
    },
};
</script>
  