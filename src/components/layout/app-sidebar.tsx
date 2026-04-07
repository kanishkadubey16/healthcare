"use client";

import { Calendar, LayoutDashboard, Settings, Users, Activity, FileText } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Example static links. We can pass different lists based on roles (Patient, Doctor, Admin)
const items = {
  admin: [
    { title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboard },
    { title: "Doctors", url: "/admin/doctors", icon: Users },
    { title: "Patients", url: "/admin/patients", icon: Users },
    { title: "Appointments", url: "/admin/appointments", icon: Calendar },
    { title: "Settings", url: "/admin/settings", icon: Settings },
  ],
  doctor: [
    { title: "Dashboard", url: "/doctor/dashboard", icon: LayoutDashboard },
    { title: "Appointments", url: "/doctor/appointments", icon: Calendar },
    { title: "Schedule", url: "/doctor/schedule", icon: Activity },
    { title: "Patients", url: "/doctor/patients", icon: Users },
    { title: "Profile", url: "/doctor/profile", icon: Settings },
  ],
  patient: [
    { title: "Dashboard", url: "/patient/dashboard", icon: LayoutDashboard },
    { title: "Doctors", url: "/patient/doctors", icon: Users },
    { title: "Book Appointment", url: "/patient/appointments/book", icon: Calendar },
    { title: "Medical History", url: "/patient/medical-history", icon: FileText },
    { title: "Profile", url: "/patient/profile", icon: Settings },
  ],
};

export function AppSidebar({ role }: { role: "admin" | "doctor" | "patient" }) {
  const pathname = usePathname();
  const currentItems = items[role] || items.patient;

  return (
    <Sidebar className="border-r border-slate-200 dark:border-slate-800">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2 font-semibold text-lg text-primary tracking-tight">
          <Activity className="h-6 w-6" />
          <span>Mediso</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {currentItems.map((item) => {
                const isActive = pathname.startsWith(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    {/* @ts-ignore - Shadcn UI SidebarMenuButton uses Slot internally but types don't expose it correctly here */}
                    <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
                      <Link href={item.url} className="flex items-center gap-2 w-full">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-sidebar-border">
        {/* We can place user profile/settings shorthand here if needed */}
      </SidebarFooter>
    </Sidebar>
  );
}
