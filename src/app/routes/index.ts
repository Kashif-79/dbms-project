import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.routes.js";
import { BookRoutes } from "../modules/book/book.routes.js";
import { AuthorRoutes } from "../modules/author/author.routes.js";

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
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
