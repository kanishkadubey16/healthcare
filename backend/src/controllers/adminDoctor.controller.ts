import { Request, Response } from "express";
import { getDoctors, addDoctor, updateDoctorDetails, removeDoctor } from "../models/doctor.model";

export const getAllDoctors = async (req: Request, res: Response) => {
  try {
    const search = (req.query.search as string) || "";
    const specialization = (req.query.specialization as string) || "";
    const result = await getDoctors(search, specialization);
    res.status(200).json(result);
  } catch {
    res.status(500).json({ message: "Failed to fetch doctors" });
  }
};

export const createDoctor = async (req: Request, res: Response) => {
  try {
    const { name, specialization, email, phone, experience } = req.body;

    if (!name || !specialization || !email) {
      res.status(400).json({ message: "name, specialization, and email are required" });
      return;
    }

    const newDoctor = await addDoctor({
      name,
      specialization,
      email,
      phone: phone || "+1 (000) 000-0000",
      experience: experience || "0 years",
    });
    res.status(201).json(newDoctor);
  } catch (error: unknown) {
    const isPrismaUniqueViolation =
      typeof error === "object" && error !== null && "code" in error && (error as { code: string }).code === "P2002";
    if (isPrismaUniqueViolation) {
      res.status(409).json({ message: "A doctor with this email already exists" });
    } else {
      res.status(500).json({ message: "Failed to create doctor" });
    }
  }
};

export const updateDoctor = async (req: Request, res: Response) => {
  try {
    const updated = await updateDoctorDetails(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (error: unknown) {
    const isNotFound =
      typeof error === "object" && error !== null && "code" in error && (error as { code: string }).code === "P2025";
    if (isNotFound) {
      res.status(404).json({ message: "Doctor not found" });
    } else {
      res.status(500).json({ message: "Failed to update doctor" });
    }
  }
};

export const deleteDoctor = async (req: Request, res: Response) => {
  try {
    await removeDoctor(req.params.id);
    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error: unknown) {
    const isNotFound =
      typeof error === "object" && error !== null && "code" in error && (error as { code: string }).code === "P2025";
    if (isNotFound) {
      res.status(404).json({ message: "Doctor not found" });
    } else {
      res.status(500).json({ message: "Failed to delete doctor" });
    }
  }
};
