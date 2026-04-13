export interface Doctor {
  id: string;
  name: string;
  email: string;
  specialization: string;
  role: "doctor";
}

export interface AvailabilitySlot {
  id: string;
  doctorId: string;
  date: string;        // ISO date string "YYYY-MM-DD"
  startTime: string;   // "HH:MM"
  endTime: string;     // "HH:MM"
  isBooked: boolean;
}

export interface CreateAvailabilityPayload {
  date: string;
  startTime: string;
  endTime: string;
}

export interface DoctorStats {
  totalAppointments: number;
  todayAppointments: number;
  pendingPrescriptions: number;
  totalPatients: number;
}
