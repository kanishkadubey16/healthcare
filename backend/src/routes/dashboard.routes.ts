import express from "express";
import { DashboardController } from "../controllers/dashboard.controller";
import { DashboardRepository } from "../services/dashboard.repository";

const router = express.Router();

// Dependency Injection
const repository = new DashboardRepository();
const controller = new DashboardController(repository);

router.get("/dashboard", controller.getDashboard);

export default router;