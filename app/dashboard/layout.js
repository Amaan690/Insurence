import Link from "next/link";
import { LayoutDashboard, FileText, Activity, CreditCard, HelpCircle, LogOut } from "lucide-react";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-[calc(100vh-80px)] overflow-hidden bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border-2 border-slate-200">
              <img src="https://i.pravatar.cc/150?img=32" alt="User" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Arjun Mehta</h3>
              <p className="text-xs text-slate-500">Premium Member</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-brand-orange-50 text-brand-orange-700 font-medium">
            <LayoutDashboard className="w-5 h-5" />
            Overview
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors">
            <FileText className="w-5 h-5" />
            My Policies
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors">
            <Activity className="w-5 h-5" />
            Claims Tracking
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors">
            <CreditCard className="w-5 h-5" />
            Payments
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-200 space-y-1">
          <Link href="/support" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors">
            <HelpCircle className="w-5 h-5" />
            Support
          </Link>
          <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-rose-600 hover:bg-rose-50 font-medium transition-colors">
            <LogOut className="w-5 h-5" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}
