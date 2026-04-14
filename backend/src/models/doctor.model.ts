import { prisma } from "../lib/prisma";

export const getDoctors = (search: string = "", specialization: string = "") => {
  return prisma.doctor.findMany({
    where: {
      AND: [
        search
          ? {
              OR: [
                { name: { contains: search, mode: "insensitive" } },
                { email: { contains: search, mode: "insensitive" } },
              ],
            }
          : {},
        specialization
          ? { specialization: { contains: specialization, mode: "insensitive" } }
          : {},
      ],
    },
    orderBy: { createdAt: "desc" },
  });
};

export const getDoctorById = (id: string) =>
  prisma.doctor.findUnique({ where: { id } });

export const addDoctor = (data: {
  name: string;
  specialization: string;
  email: string;
  phone: string;
  experience: string;
  status?: string;
  image?: string;
}) => prisma.doctor.create({ data });

export const updateDoctorDetails = (id: string, data: Partial<{
  name: string;
  specialization: string;
  email: string;
  phone: string;
  experience: string;
  status: string;
  image: string;
}>) =>
  prisma.doctor.update({ where: { id }, data });

export const removeDoctor = (id: string) =>
  prisma.doctor.delete({ where: { id } });
