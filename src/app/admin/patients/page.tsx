"use client"

import { useState } from "react"
import { Plus, Search, MoreHorizontal, Mail, Phone, Calendar, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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

export default function AdminPatientsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Patient Directory</h1>
          <p className="text-sm text-slate-500 mt-1">Access and manage all patient medical records and admission status.</p>
        </div>
        <Button className="bg-primary text-white shadow-md shadow-primary/20">
          <Plus className="mr-2 h-4 w-4" /> Add New Patient
        </Button>
      </div>

      <div className="glass-panel p-4 rounded-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search by name or ID..."
              className="pl-10 h-11 bg-white/50 border-slate-200 focus-visible:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="h-11">
            Filter
          </Button>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50 dark:bg-slate-900/50">
              <TableRow>
                <TableHead className="w-[300px]">Patient Name</TableHead>
                <TableHead>Admission Date</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Diagnosis</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border border-slate-200">
                        <AvatarImage src={patient.image} alt={patient.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-medium">
                          {patient.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-slate-800 dark:text-slate-100">{patient.name}</p>
                        <p className="text-xs text-slate-500">#{patient.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                       <Clock className="h-3 w-3" /> {patient.lastVisit}
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-600 dark:text-slate-400">{patient.age}</TableCell>
                  <TableCell className="text-slate-600 dark:text-slate-400">{patient.diagnosis}</TableCell>
                  <TableCell>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      patient.status === "Active" 
                        ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20" 
                        : patient.status === "Recovered"
                        ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20"
                        : "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-500/20"
                    }`}>
                      {patient.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      {/* @ts-ignore */}
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Medical Record</DropdownMenuItem>
                        <DropdownMenuItem>Edit Details</DropdownMenuItem>
                        <DropdownMenuItem>View Appointments</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-rose-500">Archive Patient</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {filteredPatients.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="h-32 text-center text-slate-400">
                    No patients found matching your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
