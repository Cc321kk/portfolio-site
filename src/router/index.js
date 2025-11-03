import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Skills from "@/pages/Skills.vue";
import Projects from "@/pages/Projects.vue";
import Contact from "@/pages/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/skills", component: Skills },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
