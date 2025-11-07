<template>
  <section class="skills" data-aos="fade-up">
    <h2>💡 我的技能</h2>
    <p class="subtitle">以下是我熟练掌握的前端技术栈：</p>

    <div class="carousel-container">
      <!-- 滑动容器 -->
      <div class="carousel-track">
        <div
          v-for="(skill, i) in skills"
          :key="i"
          class="skill-card"
          :class="{ active: i === currentIndex }"
          :style="getCardStyle(i)"
        >
          <div class="icons">
            <img
              v-for="(icon, j) in Array.isArray(skill.icon) ? skill.icon : [skill.icon]"
              :key="j"
              :src="icon"
              :alt="skill.name"
            />
          </div>
          <h3>{{ skill.name }}</h3>
          <p>{{ skill.desc }}</p>
        </div>
      </div>

      <!-- 左右箭头 -->
      <div class="arrow left" @click="prevSlide">‹</div>
      <div class="arrow right" @click="nextSlide">›</div>

      <!-- 指示圆点 -->
      <div class="dots">
        <span
          v-for="(dot, i) in skills.length"
          :key="i"
          :class="{ active: i === currentIndex }"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { skills } from "../data/skills";

const currentIndex = ref(0);

// 1) 轮播切换
function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % skills.length;
}
function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + skills.length) % skills.length;
}

// 2) 断点：小于 768px 视为移动端
const isMobile = ref(false);
onMounted(() => {
  const mql = window.matchMedia("(max-width: 768px)");
  const update = () => (isMobile.value = mql.matches);
  update();
  mql.addEventListener("change", update);
  onBeforeUnmount(() => mql.removeEventListener("change", update));
});

// 3) 样式：移动端只显示中间卡；PC 端维持原逻辑
function getCardStyle(i) {
  const total = skills.length;
  const diff = (i - currentIndex.value + total) % total;

  if (isMobile.value) {
    // 移动端：当前卡片可见，其它全部隐去（都放在 translateX(0)）
    if (diff === 0) {
      return {
        transform: "translateX(0) scale(1) translateZ(0)",
        zIndex: 3,
        opacity: 1,
      };
    }
    return {
      transform: "translateX(0) scale(0.7) translateZ(-50px)",
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
    };
  }

  // === PC 端保持你的原样式 ===
  if (diff === 0)
    return {
      transform: "translateX(0) scale(1) translateZ(0)",
      zIndex: 3,
      opacity: 1,
    };
  else if (diff === 1)
    return {
      transform: "translateX(320px) scale(0.9) translateZ(-30px)",
      zIndex: 2,
      opacity: 0.8,
    };
  else if (diff === total - 1)
    return {
      transform: "translateX(-320px) scale(0.9) translateZ(-30px)",
      zIndex: 2,
      opacity: 0.8,
    };
  else
    return {
      transform: "translateX(0) scale(0.7) translateZ(-50px)",
      zIndex: 1,
      opacity: 0,
    };
}

</script>

<style scoped>
.skills {
  padding: 60px 20px;
  width: 100%;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
  background: #f9fbff;
}

.subtitle {
  font-size: 1.1rem;
  color: #555;
}

/* 外层容器 */
.carousel-container {
  position: relative;
  width: 100vw;
  max-width: 800px;
  margin: 40px auto;
  overflow: hidden;
  perspective: 1000px; /* 🍎 关键：透视深度 */
}

/* 滑动区 */
.carousel-track {
  position: relative;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.8s cubic-bezier(0.22, 0.61, 0.36, 1); /* 🍎 平滑惯性 */
}

/* 卡片 */
.skill-card {
  position: absolute;
  width: 240px;
  height: 280px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: all 0.8s ease;
  transform-style: preserve-3d;
  opacity: 0.8;
}

.skill-card.active {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
}

/* 图标 */
.icons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

.icons img {
  width: 60px;
  height: 60px;
}

/* 描述文字 */
.skill-card p {
  font-size: 14px;
  color: #555;
  text-align: justify;
  text-justify: inter-ideograph;
  text-indent: 2em;
  line-height: 1.6;
  margin-top: 10px;
}

/* 箭头 */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.8);
  font-size: 3rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  user-select: none;
  transition: color 0.3s, transform 0.3s;
  z-index: 10;
  opacity: 0;
}

.carousel-container:hover .arrow {
  opacity: 1;
}

.arrow:hover {
  color: white;
  transform: translateY(-50%) scale(1.2);
}

.arrow.left {
  left: 5%;
}

.arrow.right {
  right: 5%;
}

/* 圆点 */
.dots {
  text-align: center;
  margin-top: 20px;
}

.dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  transition: background 0.3s;
}

.dots span.active {
  background: #42b883;
}

@media (max-width: 480px) {
  .skill-card {
    width: 50%;           /* ✅ 改成百分比自适应 */
    height: auto;
    padding: 50px 15px;
  }

  .icons img {
    width: 45px;
    height: 45px;
  }

  .arrow.left { left: 8%; }
  .arrow.right { right: 8%; }
}


</style>
