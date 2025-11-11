import { TAuthor } from "./author.interface.js";
import { AuthorModel } from "./author.model.js";

const createAuthorIntoDB = async (payload: TAuthor) => {
  const result = await AuthorModel.createAuthor(payload);
  const createdAuthor = await AuthorModel.getAuthorById(
    (result as any).insertId
  );
  return createdAuthor;
};

const getAllAuthorsFromDB = async () => {
  const result = await AuthorModel.getAllAuthors();
  return result;
};

const getAuthorByIdFromDB = async (id: number) => {
  const result = await AuthorModel.getAuthorById(id);
  return result;
};

const deleteAuthorByIdFromDB = async (id: number) => {
  const result = await AuthorModel.deleteAuthor(id);
  return result;
};

const updateAuthorByIdFromDB = async (
  id: number,
  payload: Partial<TAuthor>
) => {
  const result = await AuthorModel.updateAuthor(id, payload);
  return result;
};

export const AuthorServices = {
  createAuthorIntoDB,
  getAllAuthorsFromDB,
  getAuthorByIdFromDB,
  deleteAuthorByIdFromDB,
  updateAuthorByIdFromDB,
};
