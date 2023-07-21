<template>
    <div class="container">
        <h2>Podcast Episodes</h2>
        <v-expansion-panels>
            <v-expansion-panel v-for="episode in episodes" :key="episode.id" :title="episode.title">
                <v-expansion-panel-text>
                    Lorem ipsum description text
                    <div class="spotify-player">
                        <iframe style="border-radius: 12px" :src="episode.src" width="400" height="300" frameborder="0"
                            allowfullscreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                    </div>
                </v-expansion-panel-text>

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
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    src: "https://open.spotify.com/embed/episode/3S9wKcMEMcV9fEAzqFitea?utm_source=generator&t=0"
                },
                {
                    id: 2,
                    title: "Episode 2",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    src: "https://open.spotify.com/embed/episode/3S9wKcMEMcV9fEAzqFitea?utm_source=generator&t=0"

                },
                {
                    id: 3,
                    title: "Episode 3",
                    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    src: "https://open.spotify.com/embed/episode/3S9wKcMEMcV9fEAzqFitea?utm_source=generator&t=0"

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
  
  <!-- <template>
    <div class="container">
      <h2>Spotify Player</h2>
      <v-expansion-panels>
        <v-expansion-panel v-model="expanded">
          <v-expansion-panel-title>
            <h3>Expand to Play</h3>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            Hi
            <div class="spotify-player">
              <iframe
                :src="spotifyEmbeddedCode"
                width="300"
                height="380"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </template>
  
  <script>
    export default {
      name: 'SpotifyPlayer',
      data() {
        return {
          expanded: false,
          spotifyEmbeddedCode:
            'https://open.spotify.com/embed/track/your_track_id',
        }
      },
    }
  </script>
  
  <style scoped>
    .container {
      padding: 10px;
    }
  
    .spotify-player {
      margin-top: 20px;
    }
  </style> -->