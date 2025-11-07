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

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getStudentByIdFromDB,
};
