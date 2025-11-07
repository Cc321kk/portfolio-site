// ======================
// 📦 基础模块导入
// ======================
import dotenv from "dotenv";
dotenv.config(); // 读取 .env 文件


import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "./db/index.js";
import contactRouter from "./routes/contact.js";
import adminRouter from "./routes/admin.js";

// ======================
// 🟢 初始化配置
// ======================

const app = express();
const PORT = process.env.PORT || 3000;

// ======================
// 🧩 中间件
// ======================
app.use(cors());
app.use(bodyParser.json());

// ======================
// 🧭 路由模块挂载
// ======================
app.use("/api", contactRouter);       // 前台留言模块
app.use("/api/admin", adminRouter);   // 管理员后台模块

// ======================
// 🧾 后备接口（非必须）
// 可用于健康检测或测试部署
// ======================
app.get("/", (req, res) => {
  res.send("✅ 后端留言管理系统运行中...");
});

// ======================
// 🧰 数据库连接检测
// ======================
(async () => {
  try {
    const [rows] = await db.query("SELECT 1");
    console.log("✅ MySQL 数据库连接成功！");
  } catch (err) {
    console.error("❌ 数据库连接失败，请检查配置:", err.message);
  }
})();

// ======================
// 🚀 启动服务器
// ======================
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`🌍 当前环境: ${process.env.NODE_ENV || "development"}`);
  if (!process.env.SECRET_KEY) {
    console.warn("⚠️ 未检测到 SECRET_KEY，请在 .env 文件中添加！");
  }
});
