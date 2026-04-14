import "dotenv/config";
import { prisma } from "../lib/prisma";

async function seedDashboard() {
  console.log("🌱 Seeding dashboard data...");

  // 1. DashboardStat
  await prisma.dashboardStat.deleteMany();
  await prisma.dashboardStat.create({
    data: {
      totalRevenue: 84520,
      totalPatients: 1234,
      activeDoctors: 45,
    },
  });
  console.log("✅ DashboardStat seeded");

  // 2. Alerts
  await prisma.alert.deleteMany();
  await prisma.alert.createMany({
    data: [
      {
        message: "3 doctors have pending leave requests overlapping with peak surgery hours.",
        type: "critical",
      },
      {
        message: "ICU bed occupancy is at 92% capacity.",
        type: "warning",
      },
      {
        message: "Monthly compliance report is due in 2 days.",
        type: "info",
      },
    ],
  });
  console.log("✅ Alerts seeded");

  // 3. Traffic Data
  await prisma.trafficData.deleteMany();
  await prisma.trafficData.createMany({
    data: [
      { day: "Mon", patientCount: 40 },
      { day: "Tue", patientCount: 60 },
      { day: "Wed", patientCount: 45 },
      { day: "Thu", patientCount: 95 },
      { day: "Fri", patientCount: 65 },
      { day: "Sat", patientCount: 80 },
      { day: "Sun", patientCount: 50 },
    ],
  });
  console.log("✅ TrafficData seeded");

  // 4. Appointments
  await prisma.appointment.deleteMany();
  await prisma.appointment.createMany({
    data: [
      {
        patientName: "Aarav Sharma",
        type: "General Consult",
        time: "10:00 AM",
        status: "active",
      },
      {
        patientName: "Priya Nair",
        type: "Cardiology",
        time: "11:30 AM",
        status: "upcoming",
      },
      {
        patientName: "Rohan Mehta",
        type: "Dental",
        time: "01:15 PM",
        status: "upcoming",
      },
      {
        patientName: "Sneha Iyer",
        type: "Orthopedics",
        time: "02:00 PM",
        status: "upcoming",
      },
      {
        patientName: "Karan Patel",
        type: "Dermatology",
        time: "03:30 PM",
        status: "upcoming",
      },
    ],
  });
  console.log("✅ Appointments seeded");

  console.log("\n🎉 Dashboard seed complete!");
}

seedDashboard()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
