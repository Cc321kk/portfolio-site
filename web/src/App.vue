<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <Navbar />

    <!-- 主体内容 -->
    <main class="main-content">
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
/* ===============================
   🌍 基础布局
================================= */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f9fbff;
  font-family: "Helvetica Neue", Arial, "PingFang SC", sans-serif;
}

/* 主体内容区域 */
.main-content {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
}

/* 页脚样式 */
.footer {
  text-align: center;
  padding: 20px 10px;
  font-size: 14px;
  color: #666;
  background-color: #fff;
  border-top: 1px solid #eee;
}

/* ===============================
   📱 移动端适配（≤768px）
================================= */
@media (max-width: 768px) {
  .main-content {
    max-width: 100%;
    padding: 20px 15px; /* 缩小边距 */
  }

  .footer {
    font-size: 12px;
    padding: 15px 5px;
  }
}

/* ===============================
   📱 极小屏幕（≤480px）再优化
================================= */
@media (max-width: 480px) {
  .main-content {
    padding: 15px 10px;
  }

  .footer {
    font-size: 11px;
    line-height: 1.4;
  }
}
</style>
