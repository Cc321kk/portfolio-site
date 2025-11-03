<template>
  <header class="navbar">
    <div class="logo">贾<span>万豪</span></div>

    <nav :class="{ active: menuOpen }">
      <router-link to="/" exact-active-class="active">首页</router-link>
      <router-link to="/skills" exact-active-class="active">技能</router-link>
      <router-link to="/projects" exact-active-class="active">项目</router-link>
      <router-link to="/contact" exact-active-class="active"
        >联系我</router-link
      >
    </nav>
    <div class="menu-toggle" @click="menuOpen = !menuOpen">
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
</script>

<style scoped>
/* ===== 顶部导航栏样式 ===== */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 15px 40px;
  position: sticky;
  top: 0;
  z-index: 100;
}

/* ===== 左侧 LOGO ===== */
.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #42b883;
  cursor: default;
}

.logo span {
  color: #333;
}

/* ===== 导航链接部分 ===== */
nav {
  display: flex;
  gap: 30px;
}

nav a {
  color: #333;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
}

/* 鼠标悬停和当前高亮 */
nav a:hover,
nav a.active {
  color: #42b883;
}

/* 下划线动画 */
nav a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background: #42b883;
  bottom: -5px;
  left: 0;
  transition: width 0.3s;
}

nav a:hover::after,
nav a.active::after {
  width: 100%;
}

/* ===== 移动端菜单按钮 ===== */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 18px;
  cursor: pointer;
}

.menu-toggle span {
  height: 3px;
  background: #333;
  border-radius: 3px;
  transition: 0.4s;
}

/* 点击后的“X”动画 */
.menu-toggle span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.menu-toggle span.open:nth-child(2) {
  opacity: 0;
}
.menu-toggle span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  nav {
    position: absolute;
    top: 60px;
    right: 0;
    background: white;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 20px;
    padding: 20px 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-200%);
    transition: transform 0.3s ease;
  }

  nav.active {
    transform: translateY(0);
  }

  .menu-toggle {
    display: flex;
  }
}
</style>
