<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <Navbar />

    <main>
      <router-view />
    </main>

    <!-- 页脚部分 -->
    <footer class="footer">
      <p>© 2025 贾万豪 | 个人简介</p>
    </footer>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 15px 0;
  background: #2c3e50;
}

.nav-bar a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.footer {
  text-align: center;
  padding: 20px;
  font-size: 14px;
  color: #666;
}
</style>
