import { TBorrowing } from "./borrowing.interface.js";
import { BorrowingModel } from "./borrowing.model.js";

const createBorrowingIntoDB = async (payload: TBorrowing) => {
  const result = await BorrowingModel.createBorrowing(payload);
  const createdBorrowing = await BorrowingModel.getBorrowingById(
    (result as any).insertId
  );
  return createdBorrowing;
};

const getAllBorrowingsFromDB = async () => {
  const result = await BorrowingModel.getAllBorrowings();
  return result;
};

const getBorrowingByIdFromDB = async (id: number) => {
  const result = await BorrowingModel.getBorrowingById(id);
  return result;
};

const updateBorrowingByIdFromDB = async (
  id: number,
  payload: Partial<TBorrowing>
) => {
  const result = await BorrowingModel.updateBorrowing(id, payload);
  return result;
};

const deleteBorrowingByIdFromDB = async (id: number) => {
  const result = await BorrowingModel.deleteBorrowing(id);
  return result;
};

export const BorrowingServices = {
  createBorrowingIntoDB,
  getAllBorrowingsFromDB,
  getBorrowingByIdFromDB,
  updateBorrowingByIdFromDB,
  deleteBorrowingByIdFromDB,
};
