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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TopHeader({ userName, userRole }: { userName: string, userRole: string }) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b border-sidebar-border bg-white/70 dark:bg-slate-900/70 backdrop-blur-md px-6 shadow-sm sticky top-0 z-10 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50" />
        <div className="w-px h-4 bg-slate-200 dark:bg-slate-800" />
      </div>

      {/* Global Search */}
      <div className="flex-1 max-w-md hidden md:flex items-center relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full bg-slate-50 border-slate-200 pl-9 dark:bg-slate-800/50 dark:border-slate-800 text-sm focus-visible:ring-primary shadow-inner"
        />
      </div>

      <div className="ml-auto flex items-center gap-4">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative text-slate-500 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-destructive rounded-full" />
        </Button>

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full ml-2">
              <Avatar className="h-9 w-9 border border-slate-200 dark:border-slate-800 shadow-sm">
                <AvatarImage src="/avatars/01.png" alt={userName} />
                <AvatarFallback className="bg-primary/10 text-primary">{userName.charAt(0)}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
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
            <DropdownMenuItem>Help && Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
