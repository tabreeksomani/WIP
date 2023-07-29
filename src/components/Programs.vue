<template>
    <div style="display: flex; background-color: rgb(254 253 234);">
        <div class="program">
            <h2>Our Programs</h2>
            <div class="content-grid">
                <div class="blog-post" v-for="post in blogPosts" :key="post.id">
                    <div class="blog-post-card">
                        <div class="blog-post-thumbnail">
                            <!-- Replace with your blog post thumbnail -->
                            <img :src="post.thumbnail" alt="Blog Post Thumbnail" />
                        </div>
                        <h4 class="blog-post-title">{{ post.title }}</h4>
                        <p class="blog-post-description">
                            {{ post.excerpt }}</p>
                        <div class="blog-post-link">
                            <a :href="post.url">Read More</a>
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <upcoming-events></upcoming-events>
    </div>
</template>
  
<script>
import UpcomingEvents from './UpcomingEvents.vue';

export default {
    name: 'OurPrograms',
    components: {
        UpcomingEvents
    },
    data: () => ({
        show1: false,
        blogPosts: [
            {
                id: 1,
                title: "Dear Ally",
                excerpt: "How to make conversation with strangers in awkward situations",
                url: "https://www.example.com/blog-post-1",
                thumbnail: '/coffee.jpeg'
            },
            {
                id: 2,
                title: "Workshops",
                excerpt:
                    "How to gain confidence to speak at conferences even if you're just starting out",
                url: "https://www.example.com/blog-post-2",
                thumbnail: '/question.png'
            },
            {
                id: 3,
                title: "Podcast",
                excerpt:
                    "How to gain confidence to speak at conferences even if you're just starting out",
                url: "https://www.example.com/blog-post-2",
                thumbnail: '/question.png'
            },
            {
                id: 4,
                title: "Cohorts",
                excerpt:
                    "How to gain confidence to speak at conferences even if you're just starting out",
                url: "https://www.example.com/blog-post-2",
                thumbnail: '/question.png'
            },
            // Add more blog posts as needed
        ],
        // Add similar data properties for other cards
    })
}
</script>
  
<style scoped>
.cta-button {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #a30b37;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #7c0622;
}

.program {
    width: 50%;
    padding: 20px;
    padding-right: 0px;
}

/* Styles for the blog post cards */
.content-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* 2x2 grid layout */
    grid-gap: 20px;
    margin-top: 60px;
    margin-left: 20px;
    padding-top: 40px;
    max-width: 800px;
    margin: 0 auto;
}

.blog-post-card {
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    min-width: 400px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.blog-post-thumbnail img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
}

.blog-post-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

.blog-post-link {
    margin-top: 15px;
}

.blog-post-link a {
    color: #a30b37;
    text-decoration: underline;
}

.blog-post-link i {
    color: #a30b37;
    margin-left: 5px;
    font-size: 16px;
    transition: transform 0.3s ease;
}

.blog-post-link a:hover,
.blog-post-link i:hover {
    transform: translateX(5px);
}

body {
    background-color: aqua;
}

.main-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 10px;
}

.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 10px;
}

.upcoming-events-container {
    padding: 10px;
}

.custom-card {
    transition: box-shadow 0.3s;
    background-color: #FFF5E6;
    /* Adjust the background color */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.custom-title {
    font-size: 20px;
    font-weight: bold;
    color: #A30B37;
    /* Adjust the title color */
}

.custom-subtitle {
    color: #666;
    /* Adjust the subtitle color */
}

.custom-learn {
    color: #A30B37;
    /* Adjust the 'Explore' button text color */
}

.custom-arrow {
    color: #A30B37;
    /* Adjust the chevron icon color */
}

.hover-effect {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.v-card-text {
    padding: 0;
}

.v-card {
    margin-left: 40px;
    margin-bottom: 10px;
}
</style>
  