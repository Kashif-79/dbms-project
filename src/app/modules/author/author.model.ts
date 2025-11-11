import { pool } from "../../config/index.js";
import { TAuthor } from "./author.interface.js";

const createAuthorTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS authors (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        bio TEXT,
        nationality VARCHAR(100),
        birth_year YEAR,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `);
    console.log("✅ Authors table ready!");
  } catch (error) {
    console.error("❌ Error creating authors table:", error);
    throw error;
  }
};

const createAuthor = async (payload: TAuthor) => {
  const [result] = await pool.query("INSERT INTO authors SET ?", [payload]);
  return result;
};

const getAuthorById = async (id: number) => {
  const [rows] = await pool.query("SELECT * FROM authors WHERE id = ?", [id]);
  return (rows as any)[0];
};

const getAllAuthors = async () => {
  const [rows] = await pool.query("SELECT * FROM authors");
  return rows;
};

const deleteAuthor = async (id: number) => {
  const [result] = await pool.query("DELETE FROM authors WHERE id = ?", [id]);
  return result;
};

const updateAuthor = async (id: number, payload: Partial<TAuthor>) => {
  const [result] = await pool.query("UPDATE authors SET ? WHERE id = ?", [
    payload,
    id,
  ]);
  return result;
};

export const AuthorModel = {
  createAuthorTable,
  createAuthor,
  getAuthorById,
  getAllAuthors,
  deleteAuthor,
  updateAuthor,
};
