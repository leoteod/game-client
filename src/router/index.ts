import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AuthLoginPage from "../pages/auth/login/AuthLoginPage.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: AuthLoginPage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/game",
    name: "game",
    component: () => import("../pages/game/GamePage.vue"),
    redirect: "/game/server",
    children: [
      {
        path: "server",
        name: "server",
        component: () => import("../pages/game/server/GameServerPage.vue"),
      },
      {
        path: "server/:id",
        name: "server-id",
        redirect: "/game/server",
        children: [
          {
            path: "main",
            name: "main",
            component: () => import("../pages/game/main/GameMainPage.vue"),
          },
        ],
      },
    ],
  },
  { path: "/:catchAll(.*)", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

function returnRoutePath(name: string) {
  return routes.find((route) => route.name === name)!.path;
}

router.beforeEach((to, from, next) => {
  const publicPages = [returnRoutePath("homepage"), returnRoutePath("login")];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("token");
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next(returnRoutePath("login"));
  } else {
    next();
  }
});

export default router;
