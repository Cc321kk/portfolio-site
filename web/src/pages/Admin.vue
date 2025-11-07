<template>
  <section class="admin" data-aos="fade-up">
    <h2>🧭 后台留言管理系统</h2>
    <p class="subtitle">这里可以查看和管理访客留言。</p>

    <!-- 状态提示 -->
    <div v-if="loading" class="loading">正在加载留言数据...</div>
    <div v-else-if="messages.length === 0" class="empty">暂无留言记录。</div>

    <!-- 表格外层加滚动容器 -->
    <div class="table-container" v-else>
      <table class="message-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>邮箱</th>
            <th>留言内容</th>
            <th>时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="msg in messages" :key="msg.id">
            <td>{{ msg.id }}</td>
            <td>{{ msg.name }}</td>
            <td>{{ msg.email }}</td>
            <td>{{ msg.message }}</td>
            <td>{{ new Date(msg.created_at).toLocaleString() }}</td>
            <td>
              <button class="delete-btn" @click="deleteMessage(msg.id)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { get, del } from "@/utils/request.js"; // ✅ 封装好的请求函数
import { redirectIfNotLoggedIn } from "@/utils/auth.js"; // ✅ 登录校验辅助函数

const router = useRouter();
const messages = ref([]);
const loading = ref(true);
const error = ref("");

// ✅ 获取留言列表
async function fetchMessages() {
  try {
    loading.value = true;
    const data = await get("/admin/messages"); // ✅ 自动加上 API_BASE
    messages.value = data;
  } catch (err) {
    console.error("❌ 加载留言失败：", err);
    error.value = err.message || "加载失败";

    if (err.message.includes("401") || err.message.includes("未授权")) {
      alert("登录已过期，请重新登录");
      router.push("/login");
    }
  } finally {
    loading.value = false;
  }
}

// ✅ 删除留言
async function deleteMessage(id) {
  if (!confirm("确定要删除这条留言吗？")) return;

  try {
    const data = await del(`/admin/messages/${id}`);
    alert(data.msg || "✅ 删除成功！");
    fetchMessages(); // 刷新列表
  } catch (err) {
    console.error("❌ 删除失败：", err);
    alert("删除失败：" + (err.message || "请检查服务器。"));

    if (err.message.includes("401")) {
      router.push("/login");
    }
  }
}

// ✅ 页面加载时先检测登录状态
onMounted(() => {
  if (!redirectIfNotLoggedIn(router)) return;
  fetchMessages();
});
</script>


<style scoped>
.admin {
  padding: 60px 20px;
  text-align: center;
  background: #f9fbff;
}

.subtitle {
  color: #555;
  font-size: 1rem;
  margin-bottom: 10px;
}

/* 状态提示 */
.loading,
.empty {
  color: #666;
  font-size: 1rem;
  margin-top: 20px;
}

/* ✅ 表格外层容器（支持横向滚动） */
.table-container {
  width: 100%;
  overflow-x: auto;
  margin-top: 30px;
}

/* 表格样式 */
.message-table {
  width: 100%;
  min-width: 700px; /* 小屏自动滚动 */
  border-collapse: collapse;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  overflow: hidden;
  font-size: 0.95rem;
}

.message-table th,
.message-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  white-space: nowrap; /* 防止换行 */
}

.message-table th {
  background: #42b883;
  color: white;
  font-weight: 600;
}

.delete-btn {
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s;
}

.delete-btn:hover {
  background: #c0392b;
}

/* ===============================
   📱 移动端适配（≤768px）
================================= */
@media (max-width: 768px) {
  .admin {
    padding: 40px 15px;
  }

  h2 {
    font-size: 1.3rem;
  }

  .subtitle {
    font-size: 0.9rem;
  }

  .message-table {
    font-size: 0.85rem;
    min-width: 600px;
  }

  .delete-btn {
    padding: 4px 8px;
    font-size: 0.8rem;
  }
}

/* ===============================
   📱 极小屏（≤480px）
================================= */
@media (max-width: 480px) {
  .admin {
    padding: 30px 10px;
  }

  h2 {
    font-size: 1.2rem;
  }

  .message-table {
    min-width: 500px;
  }

  .delete-btn {
    padding: 3px 6px;
    font-size: 0.75rem;
  }

  .loading,
  .empty {
    font-size: 0.9rem;
  }
}
</style>
