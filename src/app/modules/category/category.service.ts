import { TCategory } from "./category.interface.js";
import { CategoryModel } from "./category.model.js";

const createCategoryIntoDB = async (payload: TCategory) => {
  const result = await CategoryModel.createCategory(payload);
  const createdCategory = await CategoryModel.getCategoryById(
    (result as any).insertId
  );
  return createdCategory;
};

const getAllCategoriesFromDB = async () => {
  const result = await CategoryModel.getAllCategories();
  return result;
};

const getCategoryByIdFromDB = async (id: number) => {
  const result = await CategoryModel.getCategoryById(id);
  return result;
};

const updateCategoryByIdFromDB = async (
  id: number,
  payload: Partial<TCategory>
) => {
  const result = await CategoryModel.updateCategory(id, payload);
  return result;
};

const deleteCategoryByIdFromDB = async (id: number) => {
  const result = await CategoryModel.deleteCategory(id);
  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
  getCategoryByIdFromDB,
  updateCategoryByIdFromDB,
  deleteCategoryByIdFromDB,
};
