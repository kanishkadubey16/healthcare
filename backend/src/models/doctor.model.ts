export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  email: string;
  phone: string;
  experience: string;
  status: string;
  image: string;
}

export let doctors: Doctor[] = [
  {
    id: "DR001",
    name: "Dr. Sarah Johnson",
    specialization: "Cardiology",
    email: "sarah.j@mediso.com",
    phone: "+1 (555) 001-2233",
    experience: "12 years",
    status: "Active",
    image: "/avatars/doctor-1.png",
  },
  {
    id: "DR002",
    name: "Dr. Michael Chen",
    specialization: "Neurology",
    email: "m.chen@mediso.com",
    phone: "+1 (555) 001-4455",
    experience: "8 years",
    status: "Active",
    image: "/avatars/doctor-2.png",
  }
];

export const getDoctors = () => doctors;
export const addDoctor = (doc: Doctor) => doctors.push(doc);
export const updateDoctorDetails = (id: string, newDoc: Partial<Doctor>) => {
  const i = doctors.findIndex(d => d.id === id);
  if (i > -1) {
    doctors[i] = { ...doctors[i], ...newDoc };
    return doctors[i];
  }
  return null;
};
export const removeDoctor = (id: string) => {
  doctors = doctors.filter(d => d.id !== id);
};
