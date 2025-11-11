import express from "express";
import { CategoryController } from "./category.controller.js";

const router = express.Router();

router.post("/create-category", CategoryController.createCategory);
router.get("/", CategoryController.getAllCategories);
router.get("/:id", CategoryController.getCategoryById);
router.put("/:id", CategoryController.updateCategory);
router.delete("/:id", CategoryController.deleteCategory);

export const CategoryRoutes = router;
