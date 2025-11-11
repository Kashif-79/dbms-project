import { pool } from "../../config/index.js";
import { TReport } from "./report.interface.js";

const createReportTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS reports (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(150) NOT NULL,
        description TEXT,
        report_date DATE DEFAULT (CURRENT_DATE),
        total_books INT DEFAULT 0,
        total_borrowed INT DEFAULT 0,
        total_overdue INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `);
    console.log("✅ Reports table ready!");
  } catch (error) {
    console.error("❌ Error creating reports table:", error);
    throw error;
  }
};

const createReport = async (payload: TReport) => {
  const [result] = await pool.query("INSERT INTO reports SET ?", [payload]);
  return result;
};

const getAllReports = async () => {
  const [rows] = await pool.query("SELECT * FROM reports");
  return rows;
};

const getReportById = async (id: number) => {
  const [rows] = await pool.query("SELECT * FROM reports WHERE id = ?", [id]);
  return (rows as any)[0];
};

const updateReport = async (id: number, payload: Partial<TReport>) => {
  const [result] = await pool.query("UPDATE reports SET ? WHERE id = ?", [
    payload,
    id,
  ]);
  return result;
};

const deleteReport = async (id: number) => {
  const [result] = await pool.query("DELETE FROM reports WHERE id = ?", [id]);
  return result;
};

export const ReportModel = {
  createReportTable,
  createReport,
  getAllReports,
  getReportById,
  updateReport,
  deleteReport,
};
