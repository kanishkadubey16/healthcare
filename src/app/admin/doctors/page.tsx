"use client"

import { useState } from "react"
import { Plus, Search, Filter, Mail, Phone, Users, UserCheck, UserX, Eye, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StatCard } from "@/components/shared/StatCard"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data for doctors
const doctors = [
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
  },
  {
    id: "DR003",
    name: "Dr. Emily Taylor",
    specialization: "Pediatrics",
    email: "e.taylor@mediso.com",
    phone: "+1 (555) 001-6677",
    experience: "15 years",
    status: "On Leave",
    image: "/avatars/doctor-3.png",
  },
  {
    id: "DR004",
    name: "Dr. James Wilson",
    specialization: "Orthopedics",
    email: "j.wilson@mediso.com",
    phone: "+1 (555) 001-8899",
    experience: "10 years",
    status: "Active",
    image: "/avatars/doctor-4.png",
  },
  {
    id: "DR005",
    name: "Dr. Lisa Wang",
    specialization: "Dermatology",
    email: "lisa.w@mediso.com",
    phone: "+1 (555) 001-1122",
    experience: "6 years",
    status: "Active",
    image: "/avatars/doctor-5.png",
  },
]

// Helps map a string to a predictable teal/emerald tint for avatars
const getAvatarStyle = (name: string) => {
  const charCode = name.charCodeAt(4) || 0; // Grab a letter from the name
  const styles = [
    "bg-gradient-to-br from-emerald-100 to-teal-100 text-teal-700 dark:from-emerald-900/50 dark:to-teal-900/50 dark:text-teal-300",
    "bg-gradient-to-br from-emerald-50 to-green-100 text-emerald-700 dark:from-emerald-900/40 dark:to-green-900/40 dark:text-emerald-300",
    "bg-gradient-to-br from-teal-50 to-cyan-100 text-cyan-700 dark:from-teal-900/40 dark:to-cyan-900/40 dark:text-cyan-300",
  ];
  return styles[charCode % styles.length];
};

export default function AdminDoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-10 animate-in fade-in zoom-in-95 duration-700">
      {/* 1. Clear Visual Hierarchy + Page Title */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Doctors Directory
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5">
            Manage your medical staff, view schedules, and monitor availability.
          </p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5 transition-all text-sm px-5 py-2.5 h-auto">
          <Plus className="mr-2 h-4 w-4" /> Add New Doctor
        </Button>
      </div>

      {/* 2. Top Summary Section (Insights & Context) */}
      <div className="grid gap-6 md:grid-cols-3">
        <StatCard
          title="Total Doctors"
          value={doctors.length}
          icon={Users}
          color="teal"
        />
        <StatCard
          title="Active Doctors"
          value={doctors.filter(d => d.status === "Active").length}
          icon={UserCheck}
          trend="up"
          trendValue="95% capacity"
          color="teal"
        />
        <StatCard
          title="On Leave"
          value={doctors.filter(d => d.status === "On Leave").length}
          icon={UserX}
          color="amber"
        />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col gap-6">
        
        {/* 3. Improved Search & Filter UX */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-800/80 p-3 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50">
          <div className="relative flex-1 w-full sm:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
            <Input
              placeholder="Search by doctor name or specialization..."
              className="pl-11 h-11 bg-slate-50/50 hover:bg-slate-100/50 border-slate-200/60 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500 shadow-inner rounded-xl transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <select className="h-11 px-4 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-emerald-500/30 focus:border-emerald-500 outline-none cursor-pointer w-full sm:w-auto shadow-sm">
              <option value="">All Specializations</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="pediatrics">Pediatrics</option>
            </select>
            <Button variant="outline" className="h-11 px-5 rounded-xl border-slate-200 hover:bg-slate-50 dark:border-slate-700 shadow-sm whitespace-nowrap">
              <Filter className="mr-2 h-4 w-4 text-slate-500" /> Filters
            </Button>
          </div>
        </div>

        {/* 4. Upgrade Table Design (Card Hybrid) */}
        <div className="flex flex-col gap-3">
          {/* Custom Header Row mimicking a table, but using grid/flex for spacing */}
          <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-widest">
            <div className="col-span-4">Doctor Details</div>
            <div className="col-span-2">Specialization</div>
            <div className="col-span-2">Experience</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2 text-right pr-4">Actions</div>
          </div>

          {filteredDoctors.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-16 bg-white dark:bg-slate-800/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-700">
              <p className="text-slate-400 font-medium">No doctors found matching your search.</p>
            </div>
          ) : (
            filteredDoctors.map((doctor) => (
              <div 
                key={doctor.id} 
                className="group flex flex-col lg:grid lg:grid-cols-12 gap-4 items-center bg-white dark:bg-slate-800/80 p-4 lg:px-6 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-emerald-100 dark:hover:border-emerald-900/30 transition-all duration-300"
              >
                {/* Profile */}
                <div className="col-span-4 w-full flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-white dark:border-slate-800 shadow-sm bg-white">
                    <AvatarImage src={doctor.image} alt={doctor.name} />
                    <AvatarFallback className={`font-bold ${getAvatarStyle(doctor.name)}`}>
                      {doctor.name.replace("Dr. ", "").split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 dark:text-white truncate group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {doctor.name}
                    </h4>
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> {doctor.email}</span>
                      <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> {doctor.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Specialization */}
                <div className="col-span-2 w-full lg:w-auto">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-semibold whitespace-nowrap">
                    {doctor.specialization}
                  </span>
                </div>

                {/* Experience */}
                <div className="col-span-2 w-full lg:w-auto text-sm font-medium text-slate-600 dark:text-slate-400">
                  {doctor.experience}
                </div>

                {/* Status */}
                <div className="col-span-2 w-full lg:w-auto">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
                    doctor.status === "Active" 
                      ? "bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400" 
                      : "bg-amber-100/80 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400"
                  }`}>
                    {doctor.status === "Active" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />}
                    {doctor.status === "On Leave" && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5" />}
                    {doctor.status}
                  </span>
                </div>

                {/* Actions (Visible on Hover/Always on Mobile) */}
                <div className="col-span-2 w-full lg:w-auto flex items-center lg:justify-end gap-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-2">
                  <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20" title="View Profile">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20" title="Edit Doctor">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20" title="Delete">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
