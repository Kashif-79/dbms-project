import express from "express";
import cors from "cors";
import { pool } from "./app/config/index.js";
import { StudentRoutes } from "./app/modules/student/student.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/students", StudentRoutes);

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
