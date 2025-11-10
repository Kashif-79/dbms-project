import { TStudent } from "./student.interface.js";
import { StudentModel } from "./student.model.js";

const createStudentIntoDB = async (payload: TStudent) => {
  const result = await StudentModel.createStudent(payload);
  const createdStudent = await StudentModel.getStudentById(
    (result as any).insertId
  );
  return createdStudent;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.getAllStudents();
  return result;
};

const getStudentByIdFromDB = async (id: number) => {
  const result = await StudentModel.getStudentById(id);
  return result;
};
const deleteStudentByIdFromDB = async (id: number) => {
  const result = await StudentModel.deleteStudent(id);
  return result;
};

const updateStudentByIdFromDB = async (
  id: number,
  payload: Partial<TStudent>
) => {
  const result = await StudentModel.updateStudent(id, payload);
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getStudentByIdFromDB,
  deleteStudentByIdFromDB,
  updateStudentByIdFromDB,
};
