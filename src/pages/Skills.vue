<template>
  <section class="skills" data-aos="fade-up">
    <h2>💡 我的技能</h2>
    <p class="subtitle">以下是我熟练掌握的前端技术栈：</p>

    <div class="skill-grid">
      <!-- ✅ 每个 skill-card 循环一个技能 -->
      <div class="skill-card" v-for="skill in skills" :key="skill.name">
        <!-- ✅ 支持多图的图标区域 -->
        <div class="icons">
          <img
            v-for="(icon, i) in Array.isArray(skill.icon)
              ? skill.icon
              : [skill.icon]"
            :key="i"
            :src="icon"
            :alt="skill.name"
          />
        </div>
        <h3>{{ skill.name }}</h3>
        <p>{{ skill.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skills } from "../data/skills";
</script>

<style scoped>
.skills {
  padding: 60px 20px;
  text-align: center;
  background: #f9fbff;
}

.subtitle {
  font-size: 1.1rem;
  color: #555;
}

.skill-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
}

/* 每个卡片 */
.skill-card {
  width: 220px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s;
}

.skill-card:hover {
  transform: translateY(-8px);
}

/* 图标容器（多图支持） */
.icons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

/* 图标样式 */
.icons img {
  width: 60px;
  height: 60px;
}
</style>
