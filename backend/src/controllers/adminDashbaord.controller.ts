import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const getDashboardStats = async (req: Request, res: Response) => {
  try {
    const [
      totalRevenue,
      totalPatients,
      totalDoctors,
      activeDoctors,
      upcomingAppointments,
    ] = await Promise.all([
      prisma.appointment.aggregate({ _sum: { price: true } }),
      prisma.patient.count(),
      prisma.doctor.count(),
      prisma.doctor.count({ where: { status: "Active" } }),
      prisma.appointment.findMany({
        where: { status: "upcoming" },
        orderBy: { createdAt: "asc" },
        take: 3,
      }),
    ]);

    res.status(200).json({
      totalRevenue: totalRevenue._sum.price ?? 0,
      totalPatients,
      totalDoctors,
      activeDoctors,
      upcomingAppointments,
    });
  } catch {
    res.status(500).json({ message: "Failed to fetch dashboard stats" });
  }
};

export const getTrafficData = async (req: Request, res: Response) => {
  try {
    const appointments = await prisma.appointment.findMany({
      select: { time: true },
    });

    const counts = Array(7).fill(0);

    appointments.forEach((a) => {
      const day = new Date(a.time).getDay(); // parse the time string
      if (!isNaN(day)) counts[day]++;
    });

    // Reorder Sun-Sat → Mon-Sun
    const monToSun = [...counts.slice(1), counts[0]];

    res.status(200).json(monToSun);
  } catch {
    res.status(500).json({ message: "Failed to fetch traffic data" });
  }
};