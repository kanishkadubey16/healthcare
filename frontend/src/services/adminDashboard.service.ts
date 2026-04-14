import axios from "axios";

/* Axios instance */
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
        ? `${process.env.NEXT_PUBLIC_API_URL}/admin`
        : "http://localhost:5001/api/admin",
    withCredentials: true,
});

/* Dashboard Service */
export const adminDashboardService = {

    // 🔥 Get full dashboard data
    getDashboard: async () => {
        const { data } = await api.get("/dashboard");
        return data;
    },

    // 🚨 Get alerts only
    getAlerts: async () => {
        const { data } = await api.get("/alerts");
        return data;
    },

    // 📈 Get traffic data
    getTraffic: async () => {
        const { data } = await api.get("/traffic");
        return data;
    },

    // 🗓️ Get appointments
    getAppointments: async () => {
        const { data } = await api.get("/appointments");
        return data;
    },

};