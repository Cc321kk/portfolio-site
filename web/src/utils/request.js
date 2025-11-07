// src/utils/request.js
import { getToken } from "@/utils/auth.js";

/**
 * ✅ 自动切换接口环境
 * - 本地开发时使用 localhost:3000
 * - 上线后自动使用你的域名 https://cckks.com.cn
 */
const isProd = import.meta.env.PROD;
export const API_BASE = isProd
  ? "https://cckks.com.cn/api"  // ✅ 线上接口
  : "http://localhost:3000/api"; // ✅ 本地开发接口

/**
 * 🌍 通用请求函数
 * @param {string} endpoint - 接口路径，如 "/admin/messages"
 * @param {object} options - fetch 配置项
 * @returns {Promise<object>}
 */
export async function request(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;

  // 默认配置
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // ✅ 自动附加 token
  const token = getToken();
  if (token) {
    defaultOptions.headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(url, defaultOptions);
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const message = data.msg || `请求失败：${res.status}`;
      throw new Error(message);
    }

    return data;
  } catch (err) {
    console.error("❌ 请求出错:", err);
    throw err;
  }
}

/**
 * GET 请求
 */
export function get(endpoint) {
  return request(endpoint, { method: "GET" });
}

/**
 * POST 请求
 */
export function post(endpoint, body) {
  return request(endpoint, {
    method: "POST",
    body: JSON.stringify(body),
  });
}

/**
 * DELETE 请求
 */
export function del(endpoint) {
  return request(endpoint, { method: "DELETE" });
}
