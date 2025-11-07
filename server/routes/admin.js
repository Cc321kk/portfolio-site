import express from "express";
import { db } from "../db/index.js";
import jwt from "jsonwebtoken";

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY || "default_secret_key"; // ✅ 从 app.js 加载的全局环境变量中读取

// ======================
// 🟢 管理员登录接口
// ======================
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // 检查数据库中是否存在该账号
    const [rows] = await db.query(
      "SELECT * FROM admin_users WHERE username = ? AND password = ?",
      [username, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ msg: "账号或密码错误 ❌" });
    }

    // ✅ 登录成功，生成 token
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "2h" });

    res.json({
      msg: "登录成功 ✅",
      token,
      username,
    });
  } catch (error) {
    console.error("❌ 登录接口错误:", error);
    res.status(500).json({ msg: "服务器错误" });
  }
});

// ======================
// 🟡 Token 验证中间件
// ======================
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "未授权访问，请先登录 ❌" });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ msg: "Token 无效或已过期 ❌" });
    req.user = decoded; // 保存用户信息
    next();
  });
}

// ======================
// 🟣 获取所有留言（需登录）
// ======================
router.get("/messages", verifyToken, async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM messages ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (error) {
    console.error("❌ 获取留言失败:", error);
    res.status(500).json({ msg: "获取留言失败" });
  }
});

// ======================
// 🔴 删除留言（需登录）
// ======================
router.delete("/messages/:id", verifyToken, async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query("DELETE FROM messages WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "留言不存在 ❌" });
    }

    res.json({ msg: "留言删除成功 ✅" });
  } catch (error) {
    console.error("❌ 删除留言失败:", error);
    res.status(500).json({ msg: "删除失败 ❌" });
  }
});

export default router;
