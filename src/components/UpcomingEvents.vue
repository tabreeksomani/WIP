<template>
    <v-container style="width: 60vw">
        <v-row justify="center">
            <v-col cols="12" sm="8">
                <v-card>
                    <v-img height="200" src="https://cdn.pixabay.com/photo/2017/08/15/08/23/stars-2643089_1280.jpg" cover
                        class="text-white">
                        <div class="overlay">
                            <h2 class="section-heading">Upcoming Events</h2>
                        </div>
                    </v-img>
                    <v-card-text>
                        <v-timeline dense side="end" class="custom-timeline">
                            <v-timeline-item v-for="event in events" :key="event.id" size="x-small">
                                <div class="mb-4">
                                    <div class="font-weight-bold">{{ event.title }}</div>
                                    <div class="event-description">{{ event.description }}</div>
                                    <div class="event-date">{{ event.date }}</div>
                                    <a :href="event.rsvpLink" class="event-rsvp">RSVP</a>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    data: () => ({
        events: [
            {
                id: 1,
                title: 'Event 1',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                date: 'August 15, 2023 - 10:00 AM',
                rsvpLink: '#',
            },
            {
                id: 2,
                title: 'Event 2',
                description:
                    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                date: 'August 20, 2023 - 3:00 PM',
                rsvpLink: '#',
            },
            {
                id: 3,
                title: 'Event 3',
                description:
                    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                date: 'August 20, 2023 - 3:00 PM',
                rsvpLink: '#',
            },
            // Add more events as needed
        ],
    }),
}
</script>
  
<style scoped>
.v-timeline-item:not(:first-child)::before {
    background-color: #777;
}

.v-timeline-item::before {
    border-color: #777;
}

.v-card {
    margin-top: 40px;
}

.v-card-text {
    padding: 24px;
}

.custom-timeline {
    margin-top: 20px;
}

.event-description {
    margin-bottom: 10px;
}

.event-date {
    margin-bottom: 5px;
}

.event-rsvp {
    color: blue;
    text-decoration: underline;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
}

.section-heading {
    font-size: 24px;
    font-weight: bold;
    color: white;
    text-align: center;
    margin: 0;
    padding: 20px;
}
</style>