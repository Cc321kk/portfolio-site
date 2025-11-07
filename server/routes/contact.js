import express from "express";
import { MessageModel } from "../models/messageModel.js"; // ✅ 引入模型

const router = express.Router();

// ==========================
// 🟢 接收前端留言接口
// ==========================
router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // ✅ 校验字段是否完整
  if (!name || !email || !message) {
    return res.status(400).json({ msg: "请填写完整信息" });
  }

  try {
    await MessageModel.create({ name, email, message }); // ✅ 使用模型封装的逻辑
    console.log(`📩 新留言来自：${name}（${email}）`);
    res.json({ msg: "留言提交成功 ✅" });
  } catch (error) {
    console.error("❌ 新增留言失败:", error.message);
    res.status(500).json({ msg: "服务器错误，请稍后再试 ❌" });
  }
});

// ==========================
// 🟣 测试接口（可选）
// ==========================
router.get("/contact/test", async (req, res) => {
  try {
    const messages = await MessageModel.getAll(); // ✅ 使用模型封装的查询方法
    res.json({
      msg: `当前留言总数：${messages.length}`,
      data: messages,
    });
  } catch (error) {
    console.error("❌ 数据库连接异常:", error.message);
    res.status(500).json({ msg: "数据库连接异常" });
  }
});

export default router;
