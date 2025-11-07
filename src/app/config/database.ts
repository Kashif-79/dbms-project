import { StudentModel } from "../modules/student/student.model.js";

export async function createTables() {
  try {
    await StudentModel.createStudentTable();
    console.log("✅ All tables are ready!");
  } catch (error) {
    console.error("❌ Error creating tables:", error);
    throw error;
  }
}
