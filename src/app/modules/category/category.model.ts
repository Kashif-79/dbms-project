import { pool } from "../../config/index.js";
import { TCategory } from "./category.interface.js";

const createCategoryTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL UNIQUE,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `);
    console.log("✅ Categories table ready!");
  } catch (error) {
    console.error("❌ Error creating categories table:", error);
    throw error;
  }
};

const createCategory = async (payload: TCategory) => {
  const [result] = await pool.query("INSERT INTO categories SET ?", [payload]);
  return result;
};

const getAllCategories = async () => {
  const [rows] = await pool.query("SELECT * FROM categories");
  return rows;
};

const getCategoryById = async (id: number) => {
  const [rows] = await pool.query("SELECT * FROM categories WHERE id = ?", [
    id,
  ]);
  return (rows as any)[0];
};

const updateCategory = async (id: number, payload: Partial<TCategory>) => {
  const [result] = await pool.query("UPDATE categories SET ? WHERE id = ?", [
    payload,
    id,
  ]);
  return result;
};

const deleteCategory = async (id: number) => {
  const [result] = await pool.query("DELETE FROM categories WHERE id = ?", [
    id,
  ]);
  return result;
};

export const CategoryModel = {
  createCategoryTable,
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
