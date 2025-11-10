import express from "express";
import cors from "cors";
import { pool } from "./app/config/index.js";
import router from "./app/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.get("/", async (_req, res) => {
  try {
    const [rows] = await pool.query("SELECT NOW() AS currentTime");
    res.json({
      message: "Server is running!",
      dbTime: rows,
    });
  } catch (error) {
    console.error("Database query failed:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
});

export default app;
