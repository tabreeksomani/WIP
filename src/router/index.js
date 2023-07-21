// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import PodcastEpisodes from "@/views/Podcast.vue"
import HomePage from "@/views/Home.vue"
import AboutPage from "@/views/About.vue"
import GetInvolved from "@/views/GetInvolved.vue"
import ContactForm from "@/views/Contact.vue"
import BlogPage from "@/views/Blog.vue"

const routes = [
    {
        path: "/podcast",
        name: "podcast",
        component: PodcastEpisodes,
    },
    {
        path: "/about",
        name: "about",
        component: AboutPage,
    },
    {
        path: "/contact",
        name: "contactform",
        component: ContactForm,
    },
    {
        path: "/blog",
        name: "blog",
        component: BlogPage,
    },
    { path: '/getinvolved/:tab', component: GetInvolved },
    { path: '/getinvolved', component: GetInvolved },
    {
        path: "/",
        name: "home",
        component: HomePage,
    },



]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { el: to.hash };
        }
        return { x: 0, y: 0 };
    }
})

export default router