"use client"

import { useState } from "react"
import { User, Bell, Shield, Globe, Moon, Save, Trash2, Camera, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Settings</h1>
        <p className="text-sm text-slate-500 mt-1">Manage your account preferences and global system configurations.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Tabs */}
        <aside className="w-full md:w-64 space-y-1">
          {[
            { id: "profile", label: "Profile", icon: User },
            { id: "notifications", label: "Notifications", icon: Bell },
            { id: "security", label: "Security", icon: Shield },
            { id: "system", label: "System Config", icon: Globe },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
          <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors">
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 space-y-6">
          {activeTab === "profile" && (
            <Card className="glass-panel border-none shadow-none rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Profile Information</CardTitle>
                <CardDescription>Update your photo and personal details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="relative group">
                    <Avatar className="h-24 w-24 border-2 border-white shadow-xl">
                      <AvatarImage src="/avatars/admin.png" />
                      <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">A</AvatarFallback>
                    </Avatar>
                    <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera className="h-4 w-4" />
                    </button>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100">Administrator Profile</h4>
                    <p className="text-sm text-slate-500">JPG, GIF or PNG. Max size of 800K</p>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline">Upload New</Button>
                      <Button size="sm" variant="ghost" className="text-rose-500">Remove</Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Full Name</Label>
                    <Input id="firstName" defaultValue="System Administrator" className="bg-white/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" defaultValue="admin@mediso.com" className="bg-white/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+1 (555) 000-1122" className="bg-white/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" defaultValue="Super Admin" disabled className="bg-slate-100 cursor-not-allowed" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-slate-50/50 dark:bg-slate-800/50 p-4 rounded-b-2xl border-t flex justify-end gap-3">
                <Button variant="ghost">Cancel</Button>
                <Button className="bg-primary text-white">
                  <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "security" && (
            <Card className="glass-panel border-none shadow-none rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Security Settings</CardTitle>
                <CardDescription>Update your password and secure your account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-3">
                 <Button className="bg-primary text-white">Update Password</Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "system" && (
             <Card className="glass-panel border-none shadow-none rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Global System Configuration</CardTitle>
                <CardDescription>Set global hospital working rules and limits.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-800/50 rounded-xl">
                  <div>
                    <h5 className="font-medium">Maintenance Mode</h5>
                    <p className="text-xs text-slate-500">Temporarily disable public appointment booking.</p>
                  </div>
                  <div className="w-10 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Default Slot Duration (Minutes)</Label>
                  <Input type="number" defaultValue="30" />
                </div>
                <div className="space-y-2">
                   <Label>Max Appointments per Doctor / Day</Label>
                  <Input type="number" defaultValue="20" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                  <Button className="bg-primary text-white">Apply Config</Button>
              </CardFooter>
            </Card>
          )}
        </main>
      </div>
    </div>
  )
}
