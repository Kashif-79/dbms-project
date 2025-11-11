import { pool } from "../../config/index.js";
import { TBorrowing } from "./borrowing.interface.js";

const createBorrowingTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS borrowings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        book_id INT NOT NULL,
        borrower_name VARCHAR(100) NOT NULL,
        borrower_email VARCHAR(100),
        borrow_date DATE DEFAULT (CURRENT_DATE),
        due_date DATE,
        return_date DATE,
        status ENUM('borrowed', 'returned', 'overdue') DEFAULT 'borrowed',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
      );
    `);
    console.log("✅ Borrowings table ready!");
  } catch (error) {
    console.error("❌ Error creating borrowings table:", error);
    throw error;
  }
};

const createBorrowing = async (payload: TBorrowing) => {
  const [result] = await pool.query("INSERT INTO borrowings SET ?", [payload]);
  return result;
};

const getAllBorrowings = async () => {
  const [rows] = await pool.query("SELECT * FROM borrowings");
  return rows;
};

const getBorrowingById = async (id: number) => {
  const [rows] = await pool.query("SELECT * FROM borrowings WHERE id = ?", [
    id,
  ]);
  return (rows as any)[0];
};

const updateBorrowing = async (id: number, payload: Partial<TBorrowing>) => {
  const [result] = await pool.query("UPDATE borrowings SET ? WHERE id = ?", [
    payload,
    id,
  ]);
  return result;
};

const deleteBorrowing = async (id: number) => {
  const [result] = await pool.query("DELETE FROM borrowings WHERE id = ?", [
    id,
  ]);
  return result;
};

export const BorrowingModel = {
  createBorrowingTable,
  createBorrowing,
  getAllBorrowings,
  getBorrowingById,
  updateBorrowing,
  deleteBorrowing,
};
