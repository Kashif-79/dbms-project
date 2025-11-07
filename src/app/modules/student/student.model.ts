import { pool } from "../../config/index.js";
import { TStudent } from "./student.interface.js";

const createStudentTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS students (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ Students table ready!");
  } catch (error) {
    console.error("❌ Error creating students table:", error);
    throw error;
  }
};

const createStudent = async (payload: TStudent) => {
  const [result] = await pool.query("INSERT INTO students SET ?", [payload]);
  return result;
};

const getStudentById = async (id: number) => {
  const [rows] = await pool.query("SELECT * FROM students WHERE id = ?", [id]);
  return (rows as any)[0];
};

const getAllStudents = async () => {
  const [rows] = await pool.query("SELECT * FROM students");
  return rows;
};

export const StudentModel = {
  createStudentTable,
  createStudent,
  getStudentById,
  getAllStudents, // Add this
};
