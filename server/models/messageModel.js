import { db } from "../db/index.js";

// ======================
// 🧩 Message 模型（封装对 messages 表的操作）
// ======================
export const MessageModel = {
  // 新增留言
  async create({ name, email, message }) {
    const sql = "INSERT INTO messages (name, email, message, created_at) VALUES (?, ?, ?, NOW())";
    const [result] = await db.query(sql, [name, email, message]);
    return result;
  },

  // 查询所有留言
  async getAll() {
    const sql = "SELECT * FROM messages ORDER BY created_at DESC";
    const [rows] = await db.query(sql);
    return rows;
  },

  // 根据 ID 删除留言
  async deleteById(id) {
    const sql = "DELETE FROM messages WHERE id = ?";
    const [result] = await db.query(sql, [id]);
    return result;
  },

  // 根据 ID 查询单条留言（可选）
  async findById(id) {
    const sql = "SELECT * FROM messages WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows[0];
  },
};
