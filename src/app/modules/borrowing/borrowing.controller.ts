import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { BorrowingServices } from "./borrowing.service.js";

const createBorrowing = catchAsync(async (req, res) => {
  const result = await BorrowingServices.createBorrowingIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Borrowing record created successfully",
    data: result,
  });
});

const getAllBorrowings = catchAsync(async (req, res) => {
  const result = await BorrowingServices.getAllBorrowingsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Borrowing records retrieved successfully",
    data: result,
  });
});

const getBorrowingById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BorrowingServices.getBorrowingByIdFromDB(Number(id));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Borrowing record retrieved successfully",
    data: result,
  });
});

const updateBorrowing = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BorrowingServices.updateBorrowingByIdFromDB(
    Number(id),
    req.body
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Borrowing record updated successfully",
    data: result,
  });
});

const deleteBorrowing = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BorrowingServices.deleteBorrowingByIdFromDB(Number(id));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Borrowing record deleted successfully",
    data: result,
  });
});

export const BorrowingController = {
  createBorrowing,
  getAllBorrowings,
  getBorrowingById,
  updateBorrowing,
  deleteBorrowing,
};
