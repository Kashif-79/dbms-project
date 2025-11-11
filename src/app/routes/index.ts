import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.routes.js";
import { BookRoutes } from "../modules/book/book.routes.js";
import { AuthorRoutes } from "../modules/author/author.routes.js";
import { CategoryRoutes } from "../modules/category/category.routes.js";
import { ReportRoutes } from "../modules/reports/report.routes.js";
import { BorrowingRoutes } from "../modules/borrowing/borrowing.router.js";

const router = Router();

const modulesRoutes = [
  {
    path: "/students",
    route: StudentRoutes,
  },
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/authors",
    route: AuthorRoutes,
  },
  {
    path: "/category",
    route: CategoryRoutes,
  },
  {
    path: "/borrowing",
    route: BorrowingRoutes,
  },
  {
    path: "/reports",
    route: ReportRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
