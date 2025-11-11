import { pool } from "../../config/index.js";
import { TBook } from "./book.interface.js";

const createBookTable = async () => {
  try {
    await pool.query(`
     CREATE TABLE IF NOT EXISTS books (
     id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(150) NOT NULL,
    author VARCHAR(100) NOT NULL,
    isbn VARCHAR(50) UNIQUE NOT NULL,
    published_year YEAR,
    genre VARCHAR(100),
    copies_available INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    pdated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
    `);
    console.log("✅ Books table ready!");
  } catch (error) {
    console.error("❌ Error creating books table:", error);
    throw error;
  }
};

const createBook = async (payload: TBook) => {
  const [result] = await pool.query("INSERT INTO books SET ?", [payload]);
  return result;
};

const getBookById = async (id: number) => {
  const [rows] = await pool.query("SELECT * FROM books WHERE id = ?", [id]);
  return (rows as any)[0];
};

const getAllBooks = async () => {
  const [rows] = await pool.query("SELECT * FROM books");
  return rows;
};

const deleteBook = async (id: number) => {
  const [result] = await pool.query("DELETE FROM books WHERE id = ?", [id]);
  return result;
};

const updateBook = async (id: number, payload: Partial<TBook>) => {
  const [result] = await pool.query("UPDATE books SET ? WHERE id = ?", [
    payload,
    id,
  ]);
  return result;
};

export const BookModel = {
  createBookTable,
  createBook,
  getBookById,
  getAllBooks,
  deleteBook,
  updateBook,
};
