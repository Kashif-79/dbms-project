import { AuthorModel } from "../modules/author/author.model.js";
import { BookModel } from "../modules/book/book.model.js";
import { BorrowingModel } from "../modules/borrowing/borrowing.model.js";
import { CategoryModel } from "../modules/category/category.model.js";
import { ReportModel } from "../modules/reports/report.model.js";
import { StudentModel } from "../modules/student/student.model.js";

export async function createTables() {
  try {
    await StudentModel.createStudentTable();
    await BookModel.createBookTable();
    await AuthorModel.createAuthorTable();
    await CategoryModel.createCategoryTable();
    await BorrowingModel.createBorrowingTable();
    await ReportModel.createReportTable();
    console.log("✅ All tables are ready!");
  } catch (error) {
    console.error("❌ Error creating tables:", error);
    throw error;
  }
}
