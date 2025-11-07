import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { StudentServices } from "./student.services.js";

const createStudent = catchAsync(async (req, res) => {
  const result = await StudentServices.createStudentIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Student created successfully",
    data: result,
  });
});

const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Students retrieved successfully",
    data: result,
  });
});

const getStudentById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.getStudentByIdFromDB(Number(id));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student retrieved successfully",
    data: result,
  });
});

export const StudentController = {
  createStudent,
  getAllStudents, // Add this
  getStudentById, // Add this
};
