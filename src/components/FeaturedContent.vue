<template>
    <div class="featured-content-section">
        <div class="section-heading">
            <div class="section-text">
                <h2 class="section-title" style="color: #a30b37">
                    Featured Content
                </h2>
                <p class="section-description">
                    Discover the world of possibilities through our meticulously crafted blog posts, where we explore the
                    latest trends and share valuable knowledge to keep you ahead of the curve. Immerse yourself in
                    fascinating discussions, expert interviews, and engaging stories with our captivating podcasts.




                </p>
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

                <a href="#" class="view-all-button">View All Blog Posts</a>

            </div>

            <div class="podcast-card">
                <h3 class="content-title">Latest Podcast Episode</h3>
                <iframe style="border-radius: 12px"
                    src="https://open.spotify.com/embed/episode/3S9wKcMEMcV9fEAzqFitea?utm_source=generator&t=0"
                    width="100%" height="200" frameborder="0" allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
                <h3>Podcast Title Here</h3>
                <p class="podcast-description">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium."
                </p>
                <a href="#" class="cta-button">Listen Now</a>
            </div>
        </div>


    </div>
</template>
  
<style scoped>
/* Styles for the section heading and paragraph */
.featured-content-section {
    padding: 40px;
    background-color: #DEFFFC;
    text-align: center;
}

.section-heading {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
}

.section-text {
    flex-basis: 66%;
    text-align: left;
}

.view-all-button {
    display: block;
    width: 100%;
    max-width: 800px;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #a30b37;
    color: white;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.blog-post-description {
    color: #666
}

.view-all-button:hover {
    background-color: #7c0622;
}

.section-title {
    font-size: 32px;
    font-weight: bold;
    color: #a30b37;
    margin-bottom: 10px;
}

.section-description {
    font-size: 16px;
    color: #666;
    margin-bottom: 30px;
}

/* Styles for the podcast card */
.podcast-card {
    flex-basis: 30%;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-top: 50px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content-title {
    font-size: 24px;
    font-weight: bold;
}

.podcast-description {
    font-size: 14px;
    color: black
}

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

/* Styles for the blog post cards */
.content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    margin-top: 60px;
    max-width: 800px;
    margin: 0 auto;
}

.blog-post-card {
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    min-height: 300px;
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
</style>
  
  
<script>
export default {
    data() {
        return {
            blogPosts: [
                {
                    id: 1,
                    title: "Networking 101: Mastering Communication at Conferences",
                    excerpt: "How to make conversation with strangers in awkward situations",
                    url: "https://www.example.com/blog-post-1",
                    thumbnail: '/coffee.jpeg'
                },
                {
                    id: 2,
                    title: "Be Unapologetic in Your Pursuit of Knowledge",
                    excerpt:
                        "How to gain confidence to speak at conferences even if you're just starting out",
                    url: "https://www.example.com/blog-post-2",
                    thumbnail: '/question.png'
                },
                // Add more blog posts as needed
            ],
        };
    },
};
</script>
  
