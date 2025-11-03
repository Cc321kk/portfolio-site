<template>
  <section class="projects" data-aos="fade-up">
    <h2>🚀 我的项目</h2>
    <p class="subtitle">以下是我近期完成的一些练习与实战项目：</p>

    <div class="project-grid">
      <div class="project-card" v-for="(project, i) in projects" :key="i">
        <img :src="project.image" :alt="project.title" class="project-img" />
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.desc }}</p>
          <a :href="project.link" target="_blank" class="btn">查看项目</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: "个人博客系统",
    image: "/assets/blog.png",
    desc: "基于 Vue3 + Node.js + MySQL 的全栈博客系统，支持登录、文章发布与评论。",
    link: "https://github.com/Cc321kk/vue-blog",
  },

  {
    title: "前端可视化大屏",
    image: "/assets/dashboard.png",
    desc: "使用 Vue3 + ECharts 实现工业数据可视化展示，响应式布局自适应屏幕。",
    link: "#",
  },

  {
    title: "作品展示网站",
    image: "/assets/portfolio.png",
    desc: "使用 Vue3 + Vite 构建的个人作品展示网站，适配 PC 与移动端。",
    link: "#",
  },
];
</script>

<style scoped>
.projects {
  padding: 60px 20px;
  text-align: center;
  background: #f9fbff;
}

.project-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
}

.project-card {
  width: 320px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.project-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.project-info {
  padding: 15px;
}

.project-info h3 {
  margin-bottom: 8px;
  color: #333;
}

.project-info p {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 15px;
}

.btn {
  display: inline-block;
  padding: 8px 16px;
  background: #42b883;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.3s;
}

.btn:hover {
  background: #339c6e;
}
</style>
