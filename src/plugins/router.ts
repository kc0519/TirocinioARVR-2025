import { createRouter, createWebHistory } from "vue-router";

import MainMenu from "@/pages/MainMenu.vue";

const router = createRouter({
    history: createWebHistory("/tuemplate/"),
    routes: [
        {
            path: "/",
            name: "main",
            component: MainMenu
        },
        {
            path: "/game",
            name: "game",
            component: () => import("@/pages/GamePage.vue")
        }
    ]
});

export default router;
