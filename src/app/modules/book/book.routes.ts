import express from "express";
import { BookController } from "./book.controller.js";

const router = express.Router();

router.post("/create-book", BookController.createBook);
router.get("/", BookController.getAllBooks);
router.get("/:id", BookController.getBookById);
router.delete("/:id", BookController.deleteBook);
router.patch("/:id", BookController.updateBook);

export const BookRoutes = router;
