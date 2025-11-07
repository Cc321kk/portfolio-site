<template>
  <section class="projects" data-aos="fade-up">
    <h2>🚀 我的项目</h2>
    <p class="subtitle">以下是我近期完成的一些练习与实战项目：</p>

    <div class="project-grid">
      <div class="project-card" v-for="(project, i) in projects" :key="i">
        <img
          :src="project.image"
          :alt="project.title"
          class="project-img"
          loading="lazy"
        />
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.desc }}</p>
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
          >
            查看项目
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// ✅ 目前为静态数据，可后期改为接口请求
const projects = [
  {
    title: "个人博客系统",
    image: new URL("@/assets/blog.png", import.meta.url).href,
    desc: "基于 Vue3 + Node.js + MySQL 的全栈博客系统，支持登录、文章发布与评论。",
    link: "https://github.com/Cc321kk/vue-blog",
  },
  {
    title: "前端可视化大屏",
    image: new URL("@/assets/dashboard.png", import.meta.url).href,
    desc: "使用 Vue3 + ECharts 实现工业数据可视化展示，响应式布局自适应屏幕。",
    link: "#",
  },
  {
    title: "作品展示网站",
    image: new URL("@/assets/zuopShow.png", import.meta.url).href,
    desc: "使用 Vue3 + Vite 构建的个人作品展示网站，适配 PC 与移动端。",
    link: "https://cc321kk.github.io/portfolio-site/",
  },
];
</script>

<style scoped>
/* ==========================
   🌍 基础样式
========================== */
.projects {
  padding: 80px 20px;
  text-align: center;
  background: linear-gradient(180deg, #f9fbff 0%, #eef5ff 100%);
  max-width: 1200px; /* ✅ 居中限制宽度 */
  margin: 0 auto;
}

h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

.subtitle {
  color: #555;
  font-size: 1rem;
  margin-bottom: 40px;
}

/* ==========================
   💼 卡片布局
========================== */
.project-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.project-card {
  width: 320px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

@media (hover: hover) {
  .project-card:hover {
    transform: translateY(-8px) scale(1.02); /* ✅ hover 优化 */
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.18);
  }
}

.project-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  background-color: #f2f4f6;
}

.project-info {
  padding: 20px;
  text-align: left;
}

.project-info h3 {
  margin-bottom: 10px;
  color: #333;
  font-size: 1.2rem;
}

.project-info p {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 15px;
  min-height: 60px;
}

.btn {
  display: inline-block;
  padding: 10px 18px;
  background: #42b883;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s;
  font-weight: 500;
  text-align: center;
}

.btn:hover {
  background: #339c6e;
}

/* ==========================
   📱 平板端适配 (≤1024px)
========================== */
@media (max-width: 1024px) {
  .projects {
    padding: 60px 20px;
  }

  .project-grid {
    gap: 20px;
  }

  .project-card {
    width: 280px;
  }

  h2 {
    font-size: 1.8rem;
  }
}

/* ==========================
   📱 手机端适配 (≤768px)
========================== */
@media (max-width: 768px) {
  .projects {
    padding: 50px 15px;
  }

  .subtitle {
    font-size: 0.95rem;
    margin-bottom: 30px;
  }

  .project-grid {
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

  .project-card {
    width: 90%;
    max-width: 360px;
  }

  .project-img {
    height: 160px;
  }

  .project-info {
    padding: 15px;
    text-align: center;
  }

  .project-info p {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}

/* ==========================
   📱 超小屏 (≤480px)
========================== */
@media (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
  }

  .project-card {
    width: 95%;
  }

  .project-img {
    height: 140px;
  }

  .project-info h3 {
    font-size: 1rem;
  }

  .project-info p {
    font-size: 0.85rem;
  }

  .btn {
    width: 100%;
    font-size: 0.85rem;
  }
}
</style>
