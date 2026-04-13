"use client"

import { useState } from "react"
import { User, Bell, Shield, Globe, Save, Camera, LogOut, Lock, History, Database, CheckCircle2, Clock, CalendarDays, Activity, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [isSaved, setIsSaved] = useState(false)

  const handleSave = () => {
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  const navGroups = [
    {
      title: "Account",
      items: [
        { id: "profile", label: "Admin Profile", icon: User, desc: "Personal info & role details" },
        { id: "notifications", label: "Notifications", icon: Bell, desc: "Alerts & email preferences" },
      ]
    },
    {
      title: "Security",
      items: [
        { id: "security", label: "Security", icon: Shield, desc: "Passwords & 2FA" },
        { id: "sessions", label: "Sessions", icon: History, desc: "Active logins & devices" },
      ]
    },
    {
      title: "System",
      items: [
        { id: "system", label: "System Config", icon: Globe, desc: "Hospital global settings" },
        { id: "database", label: "Data Management", icon: Database, desc: "Backups & storage" },
      ]
    }
  ]

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700 max-w-[1400px] mx-auto pb-12">
      
      {/* 1. Page Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Control Panel
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 max-w-2xl">
          Manage system configurations, global operational limits, security protocols, and your personal administrative profile.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* 2. Grouped Sidebar Navigation */}
        <aside className="w-full lg:w-72 shrink-0 space-y-6">
          {navGroups.map((group, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-4">{group.title}</h4>
              <div className="space-y-1">
                {group.items.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-medium transition-all group ${
                        isActive
                          ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 shadow-sm border border-emerald-100 dark:border-emerald-800/50"
                          : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50 border border-transparent"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isActive ? "bg-emerald-100 dark:bg-emerald-800/50" : "bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700"
                      }`}>
                         <tab.icon className={`h-4 w-4 ${isActive ? "text-emerald-600 dark:text-emerald-400" : "text-slate-500"}`} />
                      </div>
                      <div className="text-left">
                         <p className={isActive ? "font-bold" : "font-semibold"}>{tab.label}</p>
                         <p className={`text-[10px] mt-0.5 ${isActive ? "text-emerald-600/70 dark:text-emerald-400/70" : "text-slate-400"}`}>{tab.desc}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 px-2 mt-auto">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-900/20 transition-colors group">
              <LogOut className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Secure Sign Out
            </button>
          </div>
        </aside>

        {/* 3. Main Content Area */}
        <main className="flex-1 w-full bg-white dark:bg-slate-800/80 rounded-3xl border border-slate-100 dark:border-slate-700/50 shadow-sm overflow-hidden">
          
          {/* PROFILE SECTION */}
          {activeTab === "profile" && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="px-8 py-6 border-b border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Administrator Profile</h2>
                  <p className="text-sm text-slate-500 mt-0.5">Manage your personal identification and contact protocols.</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full border border-emerald-200 dark:border-emerald-800/50 shadow-sm w-max">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Account Active
                </div>
              </div>

              <div className="p-8 space-y-10">
                {/* Avatar Section */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                  <div className="relative group cursor-pointer">
                    <Avatar className="h-32 w-32 border-4 border-white dark:border-slate-800 shadow-xl bg-slate-100 transition-transform group-hover:scale-105 duration-300">
                      <AvatarImage src="/avatars/admin.png" />
                      <AvatarFallback className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 text-4xl font-extrabold">SA</AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 bg-slate-900/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera className="text-white h-8 w-8" />
                    </div>
                    <button className="absolute bottom-1 right-1 p-2.5 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 transition-colors border-2 border-white dark:border-slate-800">
                      <Camera className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="text-center sm:text-left space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">System Administrator</h3>
                      <p className="text-sm text-slate-500">Super Admin • Joined August 2023</p>
                    </div>
                     <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-2">
                        <Button size="sm" variant="outline" className="border-slate-200 hover:bg-slate-50 shadow-sm">Upload New Photo</Button>
                        <Button size="sm" variant="ghost" className="text-slate-500 hover:text-rose-600 hover:bg-rose-50">Remove</Button>
                     </div>
                     <p className="text-xs text-slate-400 font-medium">Recommended: High-res square image (JPG or PNG).</p>
                  </div>
                </div>

                <div className="h-px bg-slate-100 dark:bg-slate-700/50" />

                {/* Form Fields: Read-Only System Identity */}
                <div className="space-y-4 max-w-2xl">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest flex items-center gap-2">
                    <Lock className="w-4 h-4 text-slate-400" /> System Identity
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-slate-500">System Role</Label>
                      <div className="relative">
                        <Input disabled defaultValue="Super Administrator" className="bg-slate-100/50 dark:bg-slate-900/50 border-transparent text-slate-500 cursor-not-allowed pl-10 h-11" />
                        <Shield className="absolute w-4 h-4 left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-500">Last System Access</Label>
                      <div className="relative">
                        <Input disabled defaultValue="Today, 09:30 AM" className="bg-slate-100/50 dark:bg-slate-900/50 border-transparent text-slate-500 cursor-not-allowed pl-10 h-11" />
                        <Clock className="absolute w-4 h-4 left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Fields: Editable Contact Details */}
                <div className="space-y-4 max-w-2xl">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest flex items-center gap-2">
                     <User className="w-4 h-4 text-slate-400" /> Contact Details
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <Label htmlFor="firstName" className="group-focus-within:text-emerald-600 transition-colors">Full Name</Label>
                      <Input id="firstName" defaultValue="System Administrator" className="bg-white dark:bg-slate-900 h-11 border-slate-200 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500 transition-all shadow-sm" />
                    </div>
                    <div className="space-y-2 group">
                      <Label htmlFor="email" className="group-focus-within:text-emerald-600 transition-colors">Emergency Email</Label>
                      <div className="relative">
                        <Input id="email" defaultValue="admin@mediso.com" className="bg-white dark:bg-slate-900 h-11 border-slate-200 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500 transition-all shadow-sm pl-10" />
                        <Mail className="absolute w-4 h-4 left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                      </div>
                    </div>
                    <div className="space-y-2 group">
                      <Label htmlFor="phone" className="group-focus-within:text-emerald-600 transition-colors">Support Phone Route</Label>
                      <Input id="phone" defaultValue="+1 (555) 000-1122" className="bg-white dark:bg-slate-900 h-11 border-slate-200 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500 transition-all shadow-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SYSTEM CONFIG SECTION */}
          {activeTab === "system" && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
               <div className="px-8 py-6 border-b border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50">
                <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Global System Configuration</h2>
                <p className="text-sm text-slate-500 mt-0.5">Define hospital-wide operational parameters affecting logic across all roles.</p>
              </div>

               <div className="p-8 space-y-10">
                 {/* Top Level Master Toggle */}
                 <div className="flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm">
                   <div className="flex gap-4">
                     <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-full h-max">
                        <Activity className="w-6 h-6" />
                     </div>
                     <div>
                       <h4 className="font-bold text-slate-900 dark:text-white">Emergency Maintenance Mode</h4>
                       <p className="text-sm text-slate-500 mt-1 max-w-md">Temporarily disable public appointment booking and patient portals across the entire system. Only Admins can log in.</p>
                     </div>
                   </div>
                   <div className="w-14 h-8 bg-slate-200 dark:bg-slate-700 rounded-full relative cursor-pointer shadow-inner shrink-0 transition-colors">
                     <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-sm" />
                   </div>
                 </div>

                 <div className="h-px bg-slate-100 dark:bg-slate-700/50" />

                 {/* Scheduling Rules */}
                 <div className="space-y-6 max-w-3xl">
                   <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest flex items-center gap-2">
                     <CalendarDays className="w-4 h-4 text-slate-400" /> Operational Hours & Limits
                   </h4>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-3">
                       <Label className="text-slate-700 dark:text-slate-300 font-semibold">Standard Working Hours</Label>
                       <div className="flex items-center gap-3">
                          <Input defaultValue="08:00 AM" className="h-11 font-medium bg-white shadow-sm" />
                          <span className="text-slate-400 font-medium">to</span>
                          <Input defaultValue="06:00 PM" className="h-11 font-medium bg-white shadow-sm" />
                       </div>
                       <p className="text-xs text-slate-400">Controls availability grid on patient interface.</p>
                     </div>

                     <div className="space-y-3">
                       <Label className="text-slate-700 dark:text-slate-300 font-semibold">Base Appointment Duration</Label>
                       <select className="flex h-11 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                         <option>15 Minutes</option>
                         <option selected>30 Minutes</option>
                         <option>45 Minutes</option>
                         <option>60 Minutes</option>
                       </select>
                       <p className="text-xs text-slate-400">Default slot length for new doctor registrations.</p>
                     </div>

                     <div className="space-y-3">
                       <Label className="text-slate-700 dark:text-slate-300 font-semibold">Max Daily Intake (Per Doctor)</Label>
                       <Input type="number" defaultValue="25" className="h-11 font-medium bg-white shadow-sm" />
                       <p className="text-xs text-slate-400">Hard limit on total permitted daily scheduled patients.</p>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          )}

          {/* Placeholders for other tabs */}
          {["notifications", "security", "sessions", "database"].includes(activeTab) && (
            <div className="p-16 flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
               <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                 <Lock className="w-8 h-8 text-slate-300 dark:text-slate-600" />
               </div>
               <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">Module Restructuring</h3>
               <p className="text-sm text-slate-400 max-w-sm mt-2">This module is currently receiving backend integration upgrades and is safely locked.</p>
            </div>
          )}

          {/* Persistent Action Footer */}
          <div className="px-8 py-5 border-t border-slate-100 dark:border-slate-700/50 bg-slate-50/80 dark:bg-slate-800/80 flex items-center justify-end gap-4 rounded-b-3xl">
            {isSaved && (
              <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center animate-in fade-in slide-in-from-right-4">
                <CheckCircle2 className="w-4 h-4 mr-1.5" />
                Settings saved successfully
              </span>
            )}
            <Button variant="ghost" className="font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
              Discard Changes
            </Button>
            <Button 
               onClick={handleSave} 
               className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 h-11 rounded-xl shadow-lg shadow-emerald-600/20 active:scale-95 transition-all"
            >
              <Save className="mr-2 h-4 w-4" /> Save Configuration
            </Button>
          </div>

        </main>
      </div>
    </div>
  )
}
