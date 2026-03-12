"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TopHeader({ userName, userRole }: { userName: string, userRole: string }) {
  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 sticky top-0 z-10 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="-ml-1 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors" />
        <div className="w-px h-4 bg-slate-200 dark:bg-slate-800" />
        <div className="hidden sm:block">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            {greeting()}, <span className="font-semibold text-slate-900 dark:text-slate-100">{userName}</span>
          </p>
        </div>
      </div>

      {/* Global Search */}
      <div className="flex-1 max-w-md hidden md:flex items-center relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
        <Input
          type="search"
          placeholder="Search patients, doctors or appointments..."
          className="w-full xl:w-[400px] h-10 bg-slate-50 hover:bg-slate-100 border-slate-200/60 pl-9 dark:bg-slate-800/50 dark:border-slate-700/60 text-sm focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500 shadow-inner transition-all rounded-full"
        />
      </div>

      <div className="ml-auto flex items-center gap-4">
        {/* Notifications */}
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative text-slate-500 rounded-full hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100 transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-destructive border-[1.5px] border-white dark:border-slate-900 rounded-full" />
        </Button>

        {/* User Profile — DropdownMenuTrigger from @base-ui renders its own <button>,
            so we render the avatar content directly inside it (no nested Button) */}
        <DropdownMenu>
          <DropdownMenuTrigger
            className="ml-2 flex h-9 w-9 xl:w-auto xl:px-1 xl:gap-2 cursor-pointer items-center justify-center rounded-full xl:rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="User menu"
          >
            <Avatar className="h-8 w-8 border border-white dark:border-slate-800 shadow-sm transition-transform hover:scale-105">
              <AvatarFallback className="bg-gradient-to-br from-emerald-100 to-teal-100 text-teal-800 font-bold text-xs">
                {userName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="hidden xl:flex flex-col items-start pr-1">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200 leading-tight">{userName}</span>
              <span className="text-[10px] uppercase font-extrabold tracking-wider text-emerald-600/80 leading-none">{userRole}</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{userName}</p>
                <p className="text-xs leading-none text-muted-foreground capitalize">
                  {userRole}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
            <DropdownMenuItem>Help &amp; Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
