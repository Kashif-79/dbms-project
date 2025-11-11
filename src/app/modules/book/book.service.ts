import { TBook } from "./book.interface.js";
import { BookModel } from "./book.model.js";

const createBookIntoDB = async (payload: TBook) => {
  const result = await BookModel.createBook(payload);
  const createdBook = await BookModel.getBookById((result as any).insertId);
  return createdBook;
};

const getAllBooksFromDB = async () => {
  const result = await BookModel.getAllBooks();
  return result;
};

const getBookByIdFromDB = async (id: number) => {
  const result = await BookModel.getBookById(id);
  return result;
};

const deleteBookByIdFromDB = async (id: number) => {
  const result = await BookModel.deleteBook(id);
  return result;
};

const updateBookByIdFromDB = async (id: number, payload: Partial<TBook>) => {
  const result = await BookModel.updateBook(id, payload);
  return result;
};

export const BookServices = {
  createBookIntoDB,
  getAllBooksFromDB,
  getBookByIdFromDB,
  deleteBookByIdFromDB,
  updateBookByIdFromDB,
};
