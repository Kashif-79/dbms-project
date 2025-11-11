import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { BookServices } from "./book.service.js";

const createBook = catchAsync(async (req, res) => {
  const result = await BookServices.createBookIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Book created successfully",
    data: result,
  });
});

const getAllBooks = catchAsync(async (req, res) => {
  const result = await BookServices.getAllBooksFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});

const getBookById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BookServices.getBookByIdFromDB(Number(id));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book retrieved successfully",
    data: result,
  });
});

const deleteBook = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BookServices.deleteBookByIdFromDB(Number(id));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book deleted successfully",
    data: result,
  });
});

const updateBook = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BookServices.updateBookByIdFromDB(Number(id), req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});

export const BookController = {
  createBook,
  getAllBooks,
  getBookById,
  deleteBook,
  updateBook,
};
