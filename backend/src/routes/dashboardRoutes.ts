import { Router } from "express";
import { getDashboardMatrics } from "../controllers/dashboardController";
const router = Router();

router.get("/", getDashboardMatrics);

export default router;
