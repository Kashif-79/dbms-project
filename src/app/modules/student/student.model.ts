import { pool } from "../../config/index.js";
import { TStudent } from "./student.interface.js";

const createStudentTable = async () => {
  try {
    await pool.query(`
     CREATE TABLE IF NOT EXISTS students (
     id INT AUTO_INCREMENT PRIMARY KEY,
     first_name VARCHAR(50) NOT NULL,
     middle_name VARCHAR(50),
     last_name VARCHAR(50) NOT NULL,
     email VARCHAR(100) UNIQUE NOT NULL,
     phone VARCHAR(20),
     department VARCHAR(100),
     roll_no VARCHAR(50) UNIQUE,
     date_of_birth DATE,
     gender ENUM('Male', 'Female', 'Other'),
     address TEXT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

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

const deleteStudent = async (id: Number) => {
  const [result] = await pool.query("DELETE FROM students WHERE id = ?", [id]);
  return result;
};

const updateStudent = async (id: number, payload: Partial<TStudent>) => {
  const [result] = await pool.query("UPDATE students SET ? WHERE id = ?", [
    payload,
    id,
  ]);
  return result;
};

export const StudentModel = {
  createStudentTable,
  createStudent,
  getStudentById,
  getAllStudents,
  deleteStudent,
  updateStudent,
};
