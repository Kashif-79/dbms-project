import { TReport } from "./report.interface.js";
import { ReportModel } from "./report.model.js";

const createReportIntoDB = async (payload: TReport) => {
  const result = await ReportModel.createReport(payload);
  const createdReport = await ReportModel.getReportById(
    (result as any).insertId
  );
  return createdReport;
};

const getAllReportsFromDB = async () => {
  const result = await ReportModel.getAllReports();
  return result;
};

const getReportByIdFromDB = async (id: number) => {
  const result = await ReportModel.getReportById(id);
  return result;
};

const updateReportByIdFromDB = async (
  id: number,
  payload: Partial<TReport>
) => {
  const result = await ReportModel.updateReport(id, payload);
  return result;
};

const deleteReportByIdFromDB = async (id: number) => {
  const result = await ReportModel.deleteReport(id);
  return result;
};

export const ReportServices = {
  createReportIntoDB,
  getAllReportsFromDB,
  getReportByIdFromDB,
  updateReportByIdFromDB,
  deleteReportByIdFromDB,
};
