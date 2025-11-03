<template>
  <section class="contact" data-aos="fade-up">
    <h2>📬 联系我</h2>
    <p class="subtitle">
      如果你对我的项目感兴趣，或者有合作意向，欢迎给我留言 👇
    </p>
    <div class="contact-container">
      <form class="contact-form" @submit.prevent="handleSubmit">
        <input
          v-model="form.name"
          type="text"
          placeholder="你的名字"
          required
        />
        <input
          v-model="form.email"
          type="email"
          placeholder="你的邮箱"
          required
        />
        <textarea
          v-model="form.message"
          placeholder="给我的留言"
          required
        ></textarea>
        <button type="submit" class="btn">发送留言</button>
      </form>

      <div class="contact-info">
        <h3>📞 其他联系方式</h3>
        <ul>
          <li><strong>邮箱：</strong>2576187302@qq.com</li>
          <li><strong>电话：</strong>18423234981</li>
          <li>
            <strong>Github:</strong>
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

const form = reactive({
  name: "",
  email: "",
  message: "",
});

function handleSubmit() {
  if (!form.name || !form.eamil || !form.message) {
    alert("请填写完整信息！");
    return;
  }
  alert(`感谢你的留言，${form.name}!我会尽快回复你。`);
  form.name = "";
  form.email = "";
  form.message = "";
}
</script>

<style scoped>
.contact {
  padding: 60px 20px;
  text-align: center;
  background: linear-gradient(180deg, #f9fbff 0%, #eef5ff 100%);
}

.subtitle {
  margin-bottom: 40px;
  color: #555;
}

.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 15px;
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

.contact-info {
  text-align: left;
  max-width: 300px;
}

.contact-info h3 {
  margin-bottom: 10px;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  margin-bottom: 10px;
  font-size: 1rem;
  text-align: left;
}

.contact-info a {
  color: #42b883;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
  }
  .contact-info {
    text-align: center;
  }
}
</style>
