<template>
  <section class="contact" data-aos="fade-up">
    <h2>📬 联系我</h2>
    <p class="subtitle">如果您对我感兴趣，请点击下方留言。👇</p>

    <!-- 📧 邮箱说明模块 -->
    <div class="email-hint">
      <p>
        如果点击「📧 直接联系我」没有自动打开邮箱客户端，
        你也可以
        <a
          href="https://mail.qq.com"
          target="_blank"
          rel="noopener noreferrer"
          class="highlight"
        >
          — >点击这里前往 QQ 邮箱网页版< —
        </a>
        （复制邮箱地址：
        <span class="highlight">2576187302@qq.com</span>）
      </p>
    </div>

    <!-- 💬 表单 + 联系信息 -->
    <div class="contact-container">
      <form class="contact-form" @submit.prevent="handleSubmit">
        <input v-model="form.name" type="text" placeholder="你的名字" required />
        <input v-model="form.email" type="email" placeholder="你的邮箱" required />
        <textarea v-model="form.message" placeholder="给我的留言" required></textarea>
        <button type="submit" class="btn">发送留言</button>
        <button type="button" class="btn secondary" @click="openEmail">
          📧 直接联系我
        </button>
      </form>

      <div class="contact-info">
        <h3>📞 其他联系方式</h3>
        <ul>
          <li><strong>邮箱：</strong>2576187302@qq.com</li>
          <li><strong>电话：</strong>18423234981</li>
          <li>
            <strong>Github：</strong>
            <a href="https://github.com/Cc321kk" target="_blank">Cc321kk</a>
          </li>
          <li><strong>位置：</strong>重庆</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { post } from "@/utils/request.js"; // ✅ 统一封装的请求函数

const form = reactive({
  name: "",
  email: "",
  message: "",
});

// ✅ 提交留言
async function handleSubmit() {
  if (!form.name || !form.email || !form.message) {
    alert("请填写完整信息！");
    return;
  }

  try {
    // 自动根据环境拼接接口前缀
    const data = await post("/contact", form);
    alert(`✅ ${data.msg || "留言已提交成功！"}`);

    // 清空输入
    form.name = "";
    form.email = "";
    form.message = "";
  } catch (err) {
    console.error("❌ 提交失败：", err);
    alert(`❌ 提交失败：${err.message || "服务器错误，请稍后再试"}`);
  }
}

// ✅ 邮件联系按钮
function openEmail() {
  const email = "2576187302@qq.com";
  const subject = encodeURIComponent("合作或交流咨询");
  const body = encodeURIComponent("你好，我是...");
  const mailLink = `mailto:${email}?subject=${subject}&body=${body}`;
  window.location.href = mailLink;

  // 如果未检测到客户端，自动引导到 QQ 邮箱网页版
  setTimeout(() => {
    if (document.hasFocus()) {
      if (confirm("未检测到邮箱客户端，是否前往 QQ 邮箱网页版？")) {
        window.open("https://mail.qq.com", "_blank");
      }
    }
  }, 2000);
}
</script>


<style scoped>
/* ==========================
   🌍 基础样式
========================== */
.contact {
  padding: 60px 20px;
  text-align: center;
  background: linear-gradient(180deg, #f9fbff 0%, #eef5ff 100%);
}

h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
}

.subtitle {
  margin-bottom: 25px;
  color: #555;
  font-size: 1rem;
}

/* 📧 邮箱提示框 */
.email-hint {
  background: #ffffffcc;
  border: 1px solid #dbe5ef;
  border-radius: 10px;
  padding: 15px 20px;
  max-width: 700px;
  margin: 0 auto 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: left;
}

.email-hint p {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
}

.email-hint .highlight {
  color: #42b883;
  font-weight: 600;
}

/* 表单 + 联系方式 */
.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  max-width: 900px; /* ✅ 限制总宽度 */
  margin: 0 auto; 
}

.contact-form {
  display: flex;
  flex-direction: column;
  width: 340px;
  gap: 15px;
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.contact-form input,
.contact-form textarea {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #42b883;
  outline: none;
}

.contact-form textarea {
  min-height: 100px;
  resize: vertical;
}

/* 按钮样式 */
.btn {
  background-color: #42b883;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #339c6e;
}

.btn.secondary {
  background-color: #2c3e50;
}

.btn.secondary:hover {
  background-color: #1f2a35;
}

/* 联系信息 */
.contact-info {
  text-align: left;
  max-width: 320px;
  background: #fff;
  padding: 20px 25px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.contact-info h3 {
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.contact-info a {
  color: #42b883;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

/* ==========================
   📱 移动端适配
========================== */
@media (max-width: 768px) {
  .contact {
    padding: 40px 15px;
    width: 100%;
  }

  h2 {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 0.95rem;
  }

  .email-hint {
    font-size: 0.9rem;
    margin: 0 auto 30px;
    text-align: center;
    max-width: 700px;
  }

  .contact-container {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    max-width: 600px; 
    padding: 15px 20px;
  }

  .contact-form,
  .contact-info {
    width: 100%;
    max-width: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    padding: 15px;
  }

  .contact-form input,
  .contact-form textarea {
    font-size: 0.95rem;
  }

  .btn {
    padding: 8px 10px;
  }
}

/* 极小屏幕（≤480px） */
@media (max-width: 480px) {
  .contact {
    padding: 30px 10px;
  }

  h2 {
    font-size: 1.3rem;
  }

  .email-hint {
    font-size: 0.85rem;
    text-align: center;
  }

  .contact-form {
    padding: 15px;
  }

  .btn {
    font-size: 0.85rem;
  }

  .contact-info {
    font-size: 0.9rem;
  }
}
</style>
