import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { ReportServices } from "./report.service.js";

const createReport = catchAsync(async (req, res) => {
  const result = await ReportServices.createReportIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Report created successfully",
    data: result,
  });
});

const getAllReports = catchAsync(async (req, res) => {
  const result = await ReportServices.getAllReportsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Reports retrieved successfully",
    data: result,
  });
});

const getReportById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ReportServices.getReportByIdFromDB(Number(id));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Report retrieved successfully",
    data: result,
  });
});

const updateReport = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ReportServices.updateReportByIdFromDB(
    Number(id),
    req.body
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Report updated successfully",
    data: result,
  });
});

const deleteReport = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ReportServices.deleteReportByIdFromDB(Number(id));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Report deleted successfully",
    data: result,
  });
});

export const ReportController = {
  createReport,
  getAllReports,
  getReportById,
  updateReport,
  deleteReport,
};
