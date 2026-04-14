import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";
export const seedDefaultUsers = async () => {
  const SALT_ROUNDS = 10;

  await prisma.user.upsert({
    where: { email: "admin@test.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@test.com",
      passwordHash: await bcrypt.hash("123456", SALT_ROUNDS),
      role: "admin",
    },
  });

  await prisma.user.upsert({
    where: { email: "doctor@test.com" },
    update: {},
    create: {
      name: "Doctor",
      email: "doctor@test.com",
      passwordHash: await bcrypt.hash("123456", SALT_ROUNDS),
      role: "doctor",
    },
  });

  console.log("Default users seeded");
};

export const findUserByEmail = (email: string) =>
  prisma.user.findUnique({ where: { email } });

export const createUser = (data: {
  name: string;
  email: string;
  passwordHash: string;
  role?: string;
}) => prisma.user.create({ data });
