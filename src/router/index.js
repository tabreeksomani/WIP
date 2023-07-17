// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import GetInvolved from "@/views/GetInvolved.vue"
const routes = [
    {
        path: "/getinvolved",
        name: "Get Involved",
        component: GetInvolved,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router