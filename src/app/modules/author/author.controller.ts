import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { AuthorServices } from "./author.service.js";

const createAuthor = catchAsync(async (req, res) => {
  const result = await AuthorServices.createAuthorIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Author created successfully",
    data: result,
  });
});

const getAllAuthors = catchAsync(async (req, res) => {
  const result = await AuthorServices.getAllAuthorsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Authors retrieved successfully",
    data: result,
  });
});

const getAuthorById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AuthorServices.getAuthorByIdFromDB(Number(id));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Author retrieved successfully",
    data: result,
  });
});

const deleteAuthor = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AuthorServices.deleteAuthorByIdFromDB(Number(id));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Author deleted successfully",
    data: result,
  });
});

const updateAuthor = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AuthorServices.updateAuthorByIdFromDB(
    Number(id),
    req.body
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Author updated successfully",
    data: result,
  });
});

export const AuthorController = {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  deleteAuthor,
  updateAuthor,
};
