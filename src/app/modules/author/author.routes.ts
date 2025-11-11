import express from "express";
import { AuthorController } from "./author.controller.js";

const router = express.Router();

router.post("/create-author", AuthorController.createAuthor);
router.get("/", AuthorController.getAllAuthors);
router.get("/:id", AuthorController.getAuthorById);
router.delete("/:id", AuthorController.deleteAuthor);
router.patch("/:id", AuthorController.updateAuthor);

export const AuthorRoutes = router;
