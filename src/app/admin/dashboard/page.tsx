import { Activity, Download, ArrowUp, ArrowDown, Users, DollarSign, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="text-slate-600 bg-white/50 dark:bg-slate-800/50">
            <Download className="mr-2 h-4 w-4" /> Export to CSV
          </Button>
          <Button className="bg-primary text-white shadow-md shadow-primary/20">
            Generate Report
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Widget 1 */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" /> Total Patients
            </h3>
          </div>
          <div>
            <p className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">1,234</p>
            <div className="flex items-center text-sm font-medium text-emerald-600">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>+12% increased vs last month</span>
            </div>
          </div>
        </div>

        {/* Widget 2 */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-2">
              <Activity className="h-5 w-5 text-indigo-500" /> Active Doctors
            </h3>
          </div>
          <div>
            <p className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">45</p>
            <div className="flex items-center text-sm font-medium text-emerald-600">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>+3 new this week</span>
            </div>
          </div>
        </div>

        {/* Widget 3 */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-rose-500" /> Revenue
            </h3>
          </div>
          <div>
            <p className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">$84,520</p>
            <div className="flex items-center text-sm font-medium text-rose-500">
              <ArrowDown className="h-4 w-4 mr-1" />
              <span>-2% decreased vs last month</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4 glass-panel rounded-2xl p-6 min-h-[300px] flex items-center justify-center border-dashed">
          <p className="text-slate-400 font-medium">Chart Component Placeholder</p>
        </div>
        <div className="lg:col-span-3 glass-panel rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-slate-800 dark:text-slate-100">Recent Appointments</h3>
            <Button variant="ghost" size="sm" className="text-primary h-8 px-2">View All</Button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    P{i}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-slate-800 dark:text-slate-200">Patient Name {i}</p>
                    <p className="text-xs text-slate-500">General Checkup</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">10:00 AM</p>
                  <p className="text-xs text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full inline-block mt-1">Confirmed</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
