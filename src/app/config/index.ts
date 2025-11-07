import dotenv from "dotenv";
import mysql from "mysql2/promise";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const pool = mysql.createPool({
  host: process.env.DB_HOST!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
  connectionLimit: 10,
});
