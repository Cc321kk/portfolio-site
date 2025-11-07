import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Skills from "@/pages/Skills.vue";
import Projects from "@/pages/Projects.vue";
import Contact from "@/pages/Contact.vue";
import Login from "@/pages/Login.vue";
import Admin from "@/pages/Admin.vue";
import AdminMessages from "@/pages/AdminMessages.vue";
import { isLoggedIn } from "@/utils/auth.js"; // ✅ 使用封装好的登录检测函数

const routes = [
  { path: "/", component: Home },
  { path: "/skills", component: Skills },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact },
  { path: "/login", component: Login },
  { path: "/admin", component: Admin },
  { path: "/adminMessages", component: AdminMessages },
];

const router = createRouter({
  history: createWebHashHistory(), // ✅ 适配 GitHub Pages
  routes,
});

/**
 * ✅ 全局路由守卫
 * - 未登录访问后台 → 跳转到登录页
 * - 已登录访问登录页 → 自动跳转后台
 */
router.beforeEach((to, from, next) => {
  const loggedIn = isLoggedIn();

  // 🧱 1. 访问后台页但未登录 → 重定向到登录页
  if (to.path.startsWith("/admin") && !loggedIn) {
    alert("请先登录管理员账户！");
    next("/login");
    return;
  }

  // 🧱 2. 已登录用户访问登录页 → 自动跳后台
  if (to.path === "/login" && loggedIn) {
    next("/admin");
    return;
  }

  // ✅ 3. 其他正常通过
  next();
});

export default router;
