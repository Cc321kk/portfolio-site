<template>
  <section class="login" data-aos="fade-up">
    <div class="login-box" data-aos="zoom-in">
      <h2>🔐 管理员登录</h2>

      <form @submit.prevent="handleLogin">
        <input v-model="username" type="text" placeholder="用户名" required />
        <input v-model="password" type="password" placeholder="密码" required />
        <button type="submit" :disabled="loading">
          {{ loading ? "正在登录..." : "登录" }}
        </button>
      </form>

      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { post } from "@/utils/request.js"; // ✅ 自动拼接环境域名
import { saveToken } from "@/utils/auth.js";
import AOS from "aos";
import "aos/dist/aos.css";

const username = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);
const router = useRouter();

async function handleLogin() {
  if (loading.value) return;
  loading.value = true;
  error.value = "";

  try {
    // ✅ 自动根据环境拼接完整接口
    const data = await post("/admin/login", {
      username: username.value.trim(),
      password: password.value.trim(),
    });

    if (data?.token) {
      saveToken(data.token);
      alert("✅ 登录成功！");
      router.push("/admin");
    } else {
      throw new Error(data.msg || "登录失败，请检查用户名或密码");
    }
  } catch (err) {
    console.error("登录失败：", err);
    error.value = err.message || "服务器异常，请稍后再试";
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  AOS.refresh(); // ✅ 保留 AOS 动效刷新
});
</script>

<style scoped>
/* =============================
   🌿 页面整体布局（与 Home.vue 一致）
============================= */
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  padding: 120px 40px;
  background: linear-gradient(180deg, #f8fbff 0%, #eef5ff 100%);
  min-height: 85vh;
  text-align: center;
  font-size: 1.15rem;
  line-height: 1.8; /* ✅ 修复行距 */
  box-sizing: border-box;
}

/* =============================
   📦 登录表单容器（模仿 Home.vue 介绍卡片）
============================= */
.login-box {
  max-width: 650px;
  width: 95%;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

@media (hover: hover) {
  .login-box:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  }
}

/* =============================
   🧾 表单元素
============================= */
h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

input {
  padding: 14px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #42b883;
}

button {
  background: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 1.05rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #339c6e;
}

button:disabled {
  background: #a3d9c5;
  cursor: not-allowed;
}

.error {
  color: red;
  margin-top: 16px;
  font-size: 0.95rem;
}

/* =============================
   📱 平板端（≤1024px）
============================= */
@media (max-width: 1024px) {
  .login {
    padding: 60px 30px;
    gap: 30px;
  }

  .login-box {
    max-width: 420px;
    padding: 35px 25px;
  }

  h2 {
    font-size: 1.6rem;
  }
}

/* =============================
   📱 手机端（≤768px）
============================= */
@media (max-width: 768px) {
  .login {
    padding: 50px 20px;
    gap: 25px;
  }

  .login-box {
    width: 90%;
    max-width: 330px;
    padding: 30px 20px;
  }

  h2 {
    font-size: 1.4rem;
  }

  input,
  button {
    font-size: 0.95rem;
  }
}

/* =============================
   📱 超小屏幕（≤480px）
============================= */
@media (max-width: 480px) {
  .login {
    padding: 40px 15px;
  }

  .login-box {
    width: 100%;
    padding: 25px 18px;
  }

  h2 {
    font-size: 1.3rem;
  }

  input,
  button {
    font-size: 0.9rem;
    padding: 10px;
  }

  .error {
    font-size: 0.9rem;
  }
}
</style>
