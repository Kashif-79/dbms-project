import express from "express";
import { StudentController } from "./student.controller.js";

const router = express.Router();

router.post("/create-student", StudentController.createStudent);
router.get("/", StudentController.getAllStudents);
router.get("/:id", StudentController.getStudentById);
router.delete("/:id", StudentController.deleteStudent);
router.patch("/:id", StudentController.updateStudent);

export const StudentRoutes = router;
