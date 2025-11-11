import express from "express";
import { BorrowingController } from "./borrowing.controller.js";

const router = express.Router();

router.post("/create-borrowing", BorrowingController.createBorrowing);
router.get("/", BorrowingController.getAllBorrowings);
router.get("/:id", BorrowingController.getBorrowingById);
router.put("/:id", BorrowingController.updateBorrowing);
router.delete("/:id", BorrowingController.deleteBorrowing);

export const BorrowingRoutes = router;
