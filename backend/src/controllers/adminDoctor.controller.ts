import { Request, Response } from "express";
import { doctors, getDoctors, addDoctor, updateDoctorDetails, removeDoctor } from "../models/doctor.model";

export const getAllDoctors = (req: Request, res: Response) => {
  const search = (req.query.search as string)?.toLowerCase() || "";
  const spec = (req.query.specialization as string)?.toLowerCase() || "";
  
  let result = getDoctors();
  
  if (search) {
    result = result.filter(d => d.name.toLowerCase().includes(search) || d.email.toLowerCase().includes(search));
  }
  if (spec) {
    result = result.filter(d => d.specialization.toLowerCase().includes(spec));
  }
  
  res.status(200).json(result);
};

export const createDoctor = (req: Request, res: Response) => {
  const payload = req.body;
  const newDoctor = {
    id: "DR" + Math.floor(Math.random() * 10000).toString().padStart(4, '0'),
    name: payload.name,
    specialization: payload.specialization,
    email: payload.email,
    phone: payload.phone || "+1 (000) 000-0000",
    experience: payload.experience || "0 years",
    status: "Active",
    image: "/avatars/default.png"
  };
  addDoctor(newDoctor);
  res.status(201).json(newDoctor);
};

export const updateDoctor = (req: Request, res: Response) => {
  const updated = updateDoctorDetails(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({ message: "Doctor not found" });
  }
  res.status(200).json(updated);
};

export const deleteDoctor = (req: Request, res: Response) => {
  removeDoctor(req.params.id);
  res.status(200).json({ message: "Deleted successfully" });
};
