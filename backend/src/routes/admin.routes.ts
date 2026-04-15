import { Router } from "express";
import { getAllDoctors, createDoctor, updateDoctor, deleteDoctor } from "../controllers/adminDoctor.controller";
import { getDashboardStats, getTrafficData } from "../controllers/adminDashbaord.controller";

const router = Router();
router.get("/dashboard", getDashboardStats);
router.get("/traffic", getTrafficData);
router.get("/doctors", getAllDoctors);
router.post("/doctors", createDoctor);
router.put("/doctors/:id", updateDoctor);
router.delete("/doctors/:id", deleteDoctor);


export const adminRouter = router;
