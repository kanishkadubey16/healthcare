"use client"

import { useState } from "react"
import { Plus, Search, MoreHorizontal, Mail, Phone, Calendar } from "lucide-react"
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

export default function AdminDoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Doctors Management</h1>
          <p className="text-sm text-slate-500 mt-1">Manage and monitor all healthcare professionals.</p>
        </div>
        <Button className="bg-primary text-white shadow-md shadow-primary/20">
          <Plus className="mr-2 h-4 w-4" /> Add New Doctor
        </Button>
      </div>

      <div className="glass-panel p-4 rounded-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search by name or specialization..."
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
                <TableHead className="w-[300px]">Doctor Name</TableHead>
                <TableHead>Specialization</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDoctors.map((doctor) => (
                <TableRow key={doctor.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border border-slate-200">
                        <AvatarImage src={doctor.image} alt={doctor.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-medium">
                          {doctor.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-slate-800 dark:text-slate-100">{doctor.name}</p>
                        <p className="text-xs text-slate-500">{doctor.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-medium border border-indigo-100 dark:border-indigo-500/20">
                      {doctor.specialization}
                    </span>
                  </TableCell>
                  <TableCell className="text-slate-600 dark:text-slate-400">{doctor.experience}</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                        <Mail className="h-3 w-3" /> {doctor.email}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                        <Phone className="h-3 w-3" /> {doctor.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      doctor.status === "Active" 
                        ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20" 
                        : "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-500/20"
                    }`}>
                      {doctor.status}
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
                        <DropdownMenuItem>View Schedule</DropdownMenuItem>
                        <DropdownMenuItem>Edit Details</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-rose-500">Remove Doctor</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {filteredDoctors.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="h-32 text-center text-slate-400">
                    No doctors found matching your search.
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
