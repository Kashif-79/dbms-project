import { AuthorModel } from "../modules/author/author.model.js";
import { BookModel } from "../modules/book/book.model.js";
import { StudentModel } from "../modules/student/student.model.js";

export async function createTables() {
  try {
    await StudentModel.createStudentTable();
    await BookModel.createBookTable();
    await AuthorModel.createAuthorTable();
    console.log("✅ All tables are ready!");
  } catch (error) {
    console.error("❌ Error creating tables:", error);
    throw error;
  }
}
