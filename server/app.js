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

// ✅ 允许前端（公网 IP）访问后端接口
app.use(
  cors({
    origin: [
      "http://121.43.193.192", // 你的前端部署地址
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// 解析 JSON 请求体
app.use(bodyParser.json());

// ======================
// 🧭 路由模块挂载
// ======================
app.use("/api", contactRouter); // 前台留言模块
app.use("/api/admin", adminRouter); // 管理员后台模块

// ======================
// 🧾 健康检测接口
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
app.listen(PORT, "0.0.0.0", () => {
  // ✅ 改成 0.0.0.0，让外部可访问
  console.log(`🚀 Server running at http://121.43.193.192:${PORT}`);
  console.log(`🌍 当前环境: ${process.env.NODE_ENV || "development"}`);
  if (!process.env.SECRET_KEY) {
    console.warn("⚠️ 未检测到 SECRET_KEY，请在 .env 文件中添加！");
  }
});
