<template>
    <div class="featured-content-section">
        <h2 class="section-title">Featured Content</h2>

        <div class="content-grid">
            <div class="podcast-card">
                <h3 class="content-title">Latest Podcast Episode</h3>
                <iframe src="https://www.example.com/podcast-episode-1" width="100%" height="150" frameborder="0"
                    allowfullscreen></iframe>
                <p class="podcast-description">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium."
                </p>
                <a href="#" class="cta-button">Listen Now</a>
            </div>

            <div class="blog-posts">
                <h3 class="content-title">Latest Blog Posts</h3>
                <div class="blog-post" v-for="post in blogPosts" :key="post.id">
                    <div class="blog-post-card">
                        <div class="blog-post-thumbnail">
                            <!-- Replace with your blog post thumbnail -->
                            <img src="https://www.example.com/blog-post-thumbnail.jpg" alt="Blog Post Thumbnail" />
                        </div>
                        <div class="blog-post-info">
                            <h4 class="blog-post-title">{{ post.title }}</h4>
                            <p class="blog-post-excerpt">{{ post.excerpt }}</p>
                            <a :href="post.url" class="blog-post-link">Read More</a>
                        </div>
                    </div>
                </div>
                <a href="#" class="cta-button">View All Blog Posts</a>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            blogPosts: [
                {
                    id: 1,
                    title: 'Blog Post 1',
                    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    url: 'https://www.example.com/blog-post-1',
                },
                {
                    id: 2,
                    title: 'Blog Post 2',
                    excerpt:
                        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
                    url: 'https://www.example.com/blog-post-2',
                },
                // Add more blog posts as needed
            ],
        }
    },
}
</script>
  
<style scoped>
.featured-content-section {
    padding: 40px;
    background-color: #f7f7f7;
    text-align: center;
}

.section-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.content-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
}

.podcast-card,
.blog-posts {
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
}

.content-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

.blog-post {
    margin-bottom: 15px;
}

.blog-post-card {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
}

.blog-post-thumbnail img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 10px;
}

.blog-post-info {
    flex-grow: 1;
}

.blog-post-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

.blog-post-excerpt {
    margin-bottom: 5px;
}

.blog-post-link {
    color: blue;
    text-decoration: underline;
}

.podcast-description {
    font-size: 14px;
    color: #666;
    margin-top: 10px;
}

.cta-button {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 16px;
    background-color: blue;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: darkblue;
}
</style>