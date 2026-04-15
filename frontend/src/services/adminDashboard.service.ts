import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}/admin` : 'http://localhost:5001/api/admin',
  withCredentials: true
});

export interface DashboardStats {
  totalRevenue: number;
  totalPatients: number;
  totalDoctors: number;
  activeDoctors: number;
  upcomingAppointments: {
    id: string;
    patientName: string;
    type: string;
    time: string;
    status: string;
    price: number;
    createdAt: string;
  }[];
}

export const adminDashboardService = {
  getStats: async (): Promise<DashboardStats> => {
    const { data } = await api.get('/dashboard');
    return data;
  },
  getTraffic: async (): Promise<number[]> => {
  const { data } = await api.get('/traffic');
  return data;
}
};

