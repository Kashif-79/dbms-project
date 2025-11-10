import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.routes.js";

const router = Router();

const modulesRoutes = [
  {
    path: "/students",
    route: StudentRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
