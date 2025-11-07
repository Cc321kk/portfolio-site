// src/utils/auth.js
import { ref } from "vue";

const TOKEN_KEY = "token";
const EXPIRE_KEY = "token_expire";

/**
 * ✅ 响应式 token，全局共享状态
 *  - 初始化从 localStorage 取值
 */
export const token = ref(localStorage.getItem(TOKEN_KEY) || null);

/**
 * 保存登录 token，并可设置过期时间（默认 7 天）
 * @param {string} value - token 值
 * @param {number} expireDays - 过期天数（默认7）
 */
export function saveToken(value, expireDays = 7) {
  const expireTime = Date.now() + expireDays * 24 * 60 * 60 * 1000; // 毫秒
  localStorage.setItem(TOKEN_KEY, value);
  localStorage.setItem(EXPIRE_KEY, expireTime);
  token.value = value;
}

/**
 * 获取当前 token
 * @returns {string|null}
 */
export function getToken() {
  const expireTime = localStorage.getItem(EXPIRE_KEY);
  if (expireTime && Date.now() > Number(expireTime)) {
    // 已过期，自动清除
    removeToken();
    return null;
  }
  return token.value;
}

/**
 * 移除 token
 */
export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(EXPIRE_KEY);
  token.value = null;
}

/**
 * 判断是否已登录
 * @returns {boolean}
 */
export function isLoggedIn() {
  return !!getToken();
}

/**
 * ✅ 登录状态检测：未登录时自动跳转登录页
 * @param {object} router - Vue Router 实例
 */
export function redirectIfNotLoggedIn(router) {
  if (!isLoggedIn()) {
    alert("⚠️ 您尚未登录，请先登录！");
    router.push("/login");
    return false;
  }
  return true;
}

/**
 * ✅ 多标签页同步（如在其他标签页登出）
 */
window.addEventListener("storage", (e) => {
  if ([TOKEN_KEY, EXPIRE_KEY].includes(e.key)) {
    token.value = e.newValue;
  }
});
