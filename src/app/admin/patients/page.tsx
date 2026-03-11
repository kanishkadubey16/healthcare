"use client"

import { useState } from "react"
import { Plus, Search, Filter, HeartPulse, Activity, UserCheck, Stethoscope, Eye, Edit, ArrowRightFromLine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StatCard } from "@/components/shared/StatCard"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data for patients
const patients = [
  {
    id: "PAT001",
    name: "Sarah Johnson",
    age: 35,
    gender: "Female",
    lastVisit: "Jan 06, 2024",
    status: "Active",
    diagnosis: "General Medicine",
    image: "/avatars/patient-1.png",
  },
  {
    id: "PAT002",
    name: "Jude Billingham",
    age: 27,
    gender: "Male",
    lastVisit: "Jan 09, 2024",
    status: "Active",
    diagnosis: "Cardiology",
    image: "/avatars/patient-2.png",
  },
  {
    id: "PAT003",
    name: "Leslie Alexander",
    age: 45,
    gender: "Female",
    lastVisit: "Jan 11, 2024",
    status: "Active",
    diagnosis: "Gastroenterology",
    image: "/avatars/patient-3.png",
  },
  {
    id: "PAT004",
    name: "John Doe",
    age: 52,
    gender: "Male",
    lastVisit: "Jan 15, 2024",
    status: "Recovered",
    diagnosis: "Orthopedics",
    image: "/avatars/patient-4.png",
  },
  {
    id: "PAT005",
    name: "Emma Wilson",
    age: 29,
    gender: "Female",
    lastVisit: "Jan 18, 2024",
    status: "Under Treatment",
    diagnosis: "Dermatology",
    image: "/avatars/patient-5.png",
  },
]

// Helps map a string to a predictable teal/emerald tint for avatars
const getAvatarStyle = (name: string) => {
  const charCode = name.charCodeAt(0) || 0;
  const styles = [
    "bg-gradient-to-br from-emerald-100 to-green-100 text-emerald-800 dark:from-emerald-900/50 dark:to-green-900/50 dark:text-emerald-300",
    "bg-gradient-to-br from-teal-50 to-emerald-100 text-teal-800 dark:from-teal-900/40 dark:to-emerald-900/40 dark:text-teal-300",
    "bg-gradient-to-br from-green-50 to-cyan-100 text-green-800 dark:from-green-900/40 dark:to-cyan-900/40 dark:text-green-300",
  ];
  return styles[charCode % styles.length];
};

export default function AdminPatientsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-10 animate-in fade-in zoom-in-95 duration-700">
      {/* 1. Clear Visual Hierarchy + Page Title */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Patient Roster
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5">
            Monitor admissions, track treatment progress, and manage patient records.
          </p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5 transition-all text-sm px-5 py-2.5 h-auto">
          <Plus className="mr-2 h-4 w-4" /> Register Patient
        </Button>
      </div>

      {/* 2. Top Summary Section (Insights & Context) */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Patients"
          value={patients.length}
          icon={UserCheck}
          color="teal"
        />
        <StatCard
          title="Active Cases"
          value={patients.filter(p => p.status === "Active").length}
          icon={Activity}
          trend="up"
          trendValue="Healthy stable"
          color="teal"
        />
        <StatCard
          title="Under Treatment"
          value={patients.filter(p => p.status === "Under Treatment").length}
          icon={Stethoscope}
          color="amber"
          trend="neutral"
          trendValue="In progress"
        />
        <StatCard
          title="Recovered"
          value={patients.filter(p => p.status === "Recovered").length}
          icon={HeartPulse}
          color="teal"
          trend="up"
          trendValue="+1 this week"
        />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col gap-6">
        
        {/* 3. Improved Search & Filter UX */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-800/80 p-3 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50">
          <div className="relative flex-1 w-full sm:max-w-[28rem] group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
            <Input
              placeholder="Search by patient name or ID..."
              className="pl-11 h-11 bg-slate-50/50 hover:bg-slate-100/50 border-slate-200/60 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500 shadow-inner rounded-xl transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <select className="h-11 px-4 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-emerald-500/30 focus:border-emerald-500 outline-none cursor-pointer w-full sm:w-auto shadow-sm text-slate-600 dark:text-slate-300">
              <option value="">Status: All</option>
              <option value="active">Active</option>
              <option value="treatment">Under Treatment</option>
              <option value="recovered">Recovered</option>
            </select>
             <select className="h-11 px-4 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-emerald-500/30 focus:border-emerald-500 outline-none cursor-pointer w-full sm:w-auto shadow-sm text-slate-600 dark:text-slate-300 hidden md:block">
              <option value="">Condition: All</option>
              <option value="cardiology">Cardiology</option>
              <option value="orthopedics">Orthopedics</option>
            </select>
            <Button variant="outline" className="h-11 px-5 rounded-xl border-slate-200 hover:bg-slate-50 dark:border-slate-700 shadow-sm whitespace-nowrap">
              <Filter className="mr-2 h-4 w-4 text-slate-500" /> Filter
            </Button>
          </div>
        </div>

        {/* 4. Upgrade Table Design (Card Hybrid for Patients) */}
        <div className="flex flex-col gap-3">
          {/* Header Row */}
          <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-widest">
            <div className="col-span-4">Patient Profile</div>
            <div className="col-span-2">Admission Date</div>
            <div className="col-span-2">Condition</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2 text-right pr-4">Actions</div>
          </div>

          {filteredPatients.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-16 bg-white dark:bg-slate-800/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-700">
              <p className="text-slate-400 font-medium">No patients found within these filter bounds.</p>
            </div>
          ) : (
            filteredPatients.map((patient) => (
              <div 
                key={patient.id} 
                className="group flex flex-col lg:grid lg:grid-cols-12 gap-4 items-center bg-white dark:bg-slate-800/80 p-4 lg:px-6 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-emerald-100 dark:hover:border-emerald-900/30 transition-all duration-300"
              >
                {/* Profile */}
                <div className="col-span-4 w-full flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-white dark:border-slate-800 shadow-sm bg-white">
                    <AvatarImage src={patient.image} alt={patient.name} />
                    <AvatarFallback className={`font-bold ${getAvatarStyle(patient.name)}`}>
                      {patient.name.split(" ").map(n => n[0]).join("").substring(0,2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 dark:text-white truncate group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {patient.name}
                    </h4>
                    <div className="flex items-center gap-3 mt-1 text-xs font-medium text-slate-400">
                      <span>#{patient.id}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                      <span>{patient.age} yrs</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                      <span>{patient.gender}</span>
                    </div>
                  </div>
                </div>

                {/* Admission Date */}
                <div className="col-span-2 w-full lg:w-auto text-sm text-slate-500 dark:text-slate-400 font-medium tracking-tight">
                  {patient.lastVisit}
                </div>

                {/* Condition / Diagnosis */}
                <div className="col-span-2 w-full lg:w-auto">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-xs font-semibold whitespace-nowrap shadow-sm">
                    {patient.diagnosis}
                  </span>
                </div>

                {/* Status */}
                <div className="col-span-2 w-full lg:w-auto">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm ${
                    patient.status === "Active" 
                      ? "bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50" 
                      : patient.status === "Recovered"
                      ? "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 border border-teal-200 dark:border-teal-800/50"
                      : "bg-amber-100/80 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50"
                  }`}>
                    {patient.status === "Active" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse" />}
                    {patient.status === "Under Treatment" && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />}
                    {patient.status === "Recovered" && <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2" />}
                    {patient.status}
                  </span>
                </div>

                {/* Actions (Visible on Hover/Always on Mobile) */}
                <div className="col-span-2 w-full lg:w-auto flex items-center lg:justify-end gap-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-2">
                  <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20" title="View Patient Record">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20" title="Edit Patient">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20" title="Discharge Patient">
                    <ArrowRightFromLine className="h-4 w-4" />
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
