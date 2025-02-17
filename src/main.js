import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import StartScreen from "./pages/StartScreen.vue";
import MainPage from "./pages/MainPage.vue";
import "./global.css";

const routes = [
  {
    path: "/",
    name: "StartScreen",
    component: StartScreen,
  },
  {
    path: "/main-page",
    name: "MainPage",
    component: MainPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute?.meta?.title;
  const metaDesc = toRoute?.meta?.description;

  window.document.title = metaTitle || "SCS-Ascent-SCH5";
  if (metaDesc) {
    addMetaTag(metaDesc);
  }
  next();
});

const addMetaTag = (value) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};

createApp(App).use(router).mount("#app");

export default router;
