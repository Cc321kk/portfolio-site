<template>
  <section class="home" data-aos="fade-up">
    <!-- 个人介绍部分 -->
    <div class="intro">
      <h1>你好，我叫<span class="highlight">贾万豪</span></h1>
      <p class="subtitle">
        目前是一名大四的学生，现在在找前端开发岗位的实习。
      </p>
      <p class="courses">
        主修课程：数据结构、Java语言程序设计、数据库原理、数据库原理课程设计、
        Python程序设计基础、前端开发技术等。
      </p>
      <p class="desc">
        我可以使用以下技术构建交互性强的 Web 应用程序：
        <strong>Vue 3</strong>、<strong>JavaScript</strong>，还有现代化前端工具。
        同时熟悉 <strong>Node.js + Express</strong> 后端框架与
        <strong>MySQL</strong> 数据库操作，具备一定的全栈开发能力。
        了解接口设计与前后端分离开发流程，能够进行 API 调试与数据交互。
      </p>
      <router-link to="/projects" class="btn">查看我的项目</router-link>
    </div>

    <!-- 个人头像 -->
    <div class="avatar" data-aos="zoom-in">
      <img src="@/assets/zjz.jpg" alt="我的证件照" />
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* =============================
   🌍 通用布局
============================= */
.home {
  display: flex;
  flex-wrap: wrap;
  align-items: center;       /* ✅ 上下居中 */
  justify-content: center;   /* ✅ 左右居中 */
  gap: 60px;
  padding: 80px 40px;
  background: linear-gradient(180deg, #f8fbff 0%, #eef5ff 100%);
  min-height: 85vh;
  max-width: 1200px;
  margin: 0 auto;
}

/* =============================
   🧑‍💻 文本区域
============================= */
.intro {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;   /* ✅ 垂直居中内容 */
  align-items: center;       /* ✅ 水平居中标题与按钮 */
  text-align: justify;
  font-size: 1.15rem; /* ✅ 整体放大文字（默认1rem→1.1rem） */
  line-height: 1.8;  /* ✅ 让行距更舒适 */
}

/* 名字 */
.intro h1 {
  font-size: 2.6rem;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
}

.highlight {
  color: #42b883;
}

/* 副标题 */
.subtitle {
  font-size: 1.3rem;
  color: #555;
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.6;
}

/* ✅ 课程部分，改成与 desc 一致 */
.courses {
  font-size: 1.15rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 25px;
  text-align: justify;
  text-justify: inter-ideograph;
  text-indent: 2em;
}

/* 描述部分 */
.desc {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 25px;
  text-align: justify;
  text-indent: 2em;
}

/* =============================
   📸 头像样式
============================= */
.avatar {
  width: 180px;
  height: 270px;
  border: 3px solid #42b883;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* =============================
   🟢 按钮样式
============================= */
.btn {
  display: inline-block;
  margin-top: 15px;
  background-color: #42b883;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  padding: 12px 24px;
  transition: background-color 0.3s;
  font-weight: 500;
}

.btn:hover {
  background-color: #339c6e;
}

/* =============================
   📱 平板端（≤1024px）
============================= */
@media (max-width: 1024px) {
  .home {
    padding: 60px 30px;
    gap: 40px;
  }

  .intro h1 {
    font-size: 2.2rem;
  }

  .avatar {
    width: 160px;
    height: 240px;
  }
}

/* =============================
   📱 手机端（≤768px）
============================= */
@media (max-width: 768px) {
  .home {
    flex-direction: column;
    text-align: center;
    padding: 50px 20px;
    gap: 30px;
  }

  .intro {
    max-width: 90%;
    align-items: center;
    text-align: justify;
  }

  .intro h1 {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .courses,
  .desc {
    font-size: 0.95rem;
  }

  .avatar {
    width: 150px;
    height: 220px;
  }

  .btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}

/* =============================
   📱 超小屏幕（≤480px）
============================= */
@media (max-width: 480px) {
  .home {
    padding: 40px 15px;
  }

  .intro h1 {
    font-size: 1.6rem;
  }

  .subtitle,
  .courses,
  .desc {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .avatar {
    width: 130px;
    height: 200px;
  }

  .btn {
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
  }
}
</style>
