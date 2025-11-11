import express from "express";
import { ReportController } from "./report.controller.js";

const router = express.Router();

router.post("/create-report", ReportController.createReport);
router.get("/", ReportController.getAllReports);
router.get("/:id", ReportController.getReportById);
router.put("/:id", ReportController.updateReport);
router.delete("/:id", ReportController.deleteReport);

export const ReportRoutes = router;
