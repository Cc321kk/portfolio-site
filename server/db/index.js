import mysql from "mysql2/promise";

// ✅ 不再需要 dotenv.config()，因为 app.js 已经全局加载过 .env

export const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "www_cckks_com_cn",
  password: process.env.DB_PASSWORD || "542926426Jwh.",
  database: process.env.DB_NAME || "portfolio_site",
});
