<template>
  <section class="home" data-aos="fade-up">
    <!-- 个人介绍部分 -->
    <div class="intro">
      <h1>你好，我叫<span class="highlight">贾万豪</span></h1>
      <p class="subtitle">一名热爱vue.js的前端开发者</p>
      <p class="desc">
        我喜欢使用以下工具构建优雅且交互性强的Web应用程序。
        <strong>Vue 3</strong>,<strong>JavaScript</strong>,还有现代化前端工具。
      </p>
      <router-link to="/projects" class="btn">查看我的项目</router-link>
    </div>

    <!-- 个人头像 -->
    <div class="avatar" data-aos="zoom-in">
      <img src="@/assets/avatar.png" alt="我的头像" />
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(180deg, #f8fbff 0%, #eef5ff 100%);
  min-height: 80vh;
}

.intro {
  max-width: 500px;
}

.intro h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.desc {
  font-size: 1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 25px;
  text-align: justify;
  text-justify: inter-ideograph;
  text-indent: 2em;
}

.highlight {
  color: #42b883;
}

.subtitle {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 15px;
}

.desc {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 25px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #42b883;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #339c6e;
}

.avatar img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .home {
    flex-direction: column;
  }
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
