<template>
    <div class="container">
        <h2>Podcast Episodes</h2>
        <v-expansion-panels>
            <v-expansion-panel v-for="episode in episodes" :key="episode.id" :title="episode.title"
                :text="episode.description">
                <iframe style="border-radius: 12px"
                    src="https://open.spotify.com/embed/episode/3S9wKcMEMcV9fEAzqFitea?utm_source=generator&t=0" width="30%"
                    height="152" frameborder="0" allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                </iframe>

                <!-- Embedded player or any other episode content can be added here -->
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>
  
<script>
export default {
    name: 'PodcastEpisodes',
    data() {
        return {
            episodes: [
                {
                    id: 1,
                    title: "Episode 1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    id: 2,
                    title: "Episode 2",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    id: 3,
                    title: "Episode 3",
                    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                }
                // Add more episodes as needed
            ]
        };
    }
};
</script>
<style scoped>
.container {
    padding: 10px;
}

iframe {
    padding: 10px;
}
</style>