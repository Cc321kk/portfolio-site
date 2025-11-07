<template>
  <section class="admin">
    <h2>💬 用户留言管理</h2>

    <!-- 数据表格容器：支持横向滚动 -->
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>姓名</th>
            <th>邮箱</th>
            <th>留言内容</th>
            <th>时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="msg in messages" :key="msg.id">
            <td>{{ msg.name }}</td>
            <td>{{ msg.email }}</td>
            <td>{{ msg.message }}</td>
            <td>{{ new Date(msg.created_at).toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 📱 移动端卡片模式 -->
    <div class="message-cards">
      <div class="message-card" v-for="msg in messages" :key="msg.id">
        <p><strong>姓名：</strong>{{ msg.name }}</p>
        <p><strong>邮箱：</strong>{{ msg.email }}</p>
        <p><strong>留言：</strong>{{ msg.message }}</p>
        <p class="time"><strong>时间：</strong>{{ new Date(msg.created_at).toLocaleString() }}</p>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { get } from "@/utils/request.js";
import { redirectIfNotLoggedIn } from "@/utils/auth.js";

const router = useRouter();
const messages = ref([]);
const loading = ref(true);
const error = ref("");

// ✅ 获取留言数据
async function fetchMessages() {
  try {
    loading.value = true;
    const data = await get("/admin/messages"); // ✅ 不用写 /api，会自动加
    messages.value = data;
  } catch (err) {
    console.error("❌ 加载留言失败：", err);
    error.value = err.message || "加载失败";

    // 如果是 token 过期或未登录，会被 request.js 自动清理
    if (err.message.includes("401") || err.message.includes("未授权")) {
      alert("登录已过期，请重新登录");
      router.push("/login");
    }
  } finally {
    loading.value = false;
  }
}

// ✅ 页面加载时先检测登录状态，再拉取数据
onMounted(() => {
  if (!redirectIfNotLoggedIn(router)) return; // 没登录就跳转
  fetchMessages();
});
</script>


<style scoped>
/* =============================
   🌍 通用样式
============================= */
.admin {
  padding: 60px 20px;
  background: #f9fbff;
  text-align: center;
}

h2 {
  font-size: 1.6rem;
  margin-bottom: 20px;
  color: #333;
}

/* =============================
   💻 桌面端表格布局
============================= */
.table-container {
  width: 100%;
  overflow-x: auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 700px; /* 防止被压扁 */
}

th, td {
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  text-align: left;
  white-space: nowrap;
}

th {
  background: #42b883;
  color: white;
  font-weight: 600;
}

/* =============================
   📱 移动端卡片模式
============================= */
.message-cards {
  display: none;
  margin-top: 20px;
}

.message-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 15px;
  margin-bottom: 15px;
  text-align: left;
}

.message-card p {
  margin: 6px 0;
  font-size: 0.95rem;
  color: #333;
}

.message-card .time {
  font-size: 0.85rem;
  color: #666;
}

/* =============================
   📱 响应式调整
============================= */
@media (max-width: 768px) {
  .admin {
    padding: 40px 15px;
  }

  h2 {
    font-size: 1.3rem;
  }

  /* 隐藏表格，用卡片模式替代 */
  .table-container {
    display: none;
  }

  .message-cards {
    display: block;
  }
}

/* 超小屏（≤480px）再优化 */
@media (max-width: 480px) {
  h2 {
    font-size: 1.2rem;
  }

  .message-card {
    padding: 12px;
  }

  .message-card p {
    font-size: 0.9rem;
  }
}
</style>
