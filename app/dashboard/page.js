"use client";

import { motion } from "framer-motion";
import { ShieldCheck, AlertCircle, FileText, Download, Zap } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8 max-w-5xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">Welcome back, Arjun 👋</h1>
          <p className="text-slate-500">Here's a summary of your insurance portfolio on OnSureKaro.</p>
        </div>
        <button className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-colors text-sm">
          Buy New Policy
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-slate-500">Total Coverage</div>
            <ShieldCheck className="w-5 h-5 text-brand-orange-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900">₹1.5 Cr</div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-slate-500">Active Policies</div>
            <FileText className="w-5 h-5 text-brand-orange-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900">2</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="bg-rose-50 p-6 rounded-2xl shadow-sm border border-rose-100">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-rose-600">Upcoming Renewal</div>
            <AlertCircle className="w-5 h-5 text-rose-500" />
          </div>
          <div className="text-xl font-bold text-slate-900 mb-1">Optima Secure Health</div>
          <div className="text-sm text-rose-600 font-medium">Due in 15 Days • ₹12,500</div>
        </motion.div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4">Your Policies</h2>
        <div className="space-y-4">
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 md:items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-xl">
                H
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-slate-900">Optima Secure Health</h3>
                  <span className="px-2 py-0.5 bg-brand-orange-50 text-brand-orange-700 text-xs font-semibold rounded-md">Active</span>
                </div>
                <p className="text-sm text-slate-500">HDFC ERGO • Family Floater</p>
              </div>
            </div>
            
            <div className="flex items-center gap-8 text-sm">
              <div>
                <div className="text-slate-500 mb-1">Coverage</div>
                <div className="font-semibold text-slate-900">₹1 Crore</div>
              </div>
              <div>
                <div className="text-slate-500 mb-1">Premium</div>
                <div className="font-semibold text-slate-900">₹12,500/yr</div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-slate-500 hover:text-brand-orange-600 hover:bg-brand-orange-50 rounded-lg transition-colors" title="Download Document">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 md:items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-xl">
                M
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-slate-900">Term Life Protect</h3>
                  <span className="px-2 py-0.5 bg-brand-orange-50 text-brand-orange-700 text-xs font-semibold rounded-md">Active</span>
                </div>
                <p className="text-sm text-slate-500">Max Life • Individual</p>
              </div>
            </div>
            
            <div className="flex items-center gap-8 text-sm">
              <div>
                <div className="text-slate-500 mb-1">Coverage</div>
                <div className="font-semibold text-slate-900">₹50 Lakhs</div>
              </div>
              <div>
                <div className="text-slate-500 mb-1">Premium</div>
                <div className="font-semibold text-slate-900">₹8,400/yr</div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-slate-500 hover:text-brand-orange-600 hover:bg-brand-orange-50 rounded-lg transition-colors" title="Download Document">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* AI Recommendation Widget for Logged in user */}
      <div className="bg-gradient-to-r from-brand-blue-900 to-brand-orange-900 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-brand-orange-400" />
              <span className="text-brand-orange-400 font-semibold text-sm tracking-wider uppercase">AI Insight</span>
            </div>
            <h3 className="text-xl font-bold mb-2">You might be underinsured for Critical Illness</h3>
            <p className="text-slate-300 text-sm max-w-lg">
              Based on your age bracket and city of residence, we recommend adding a ₹20L Critical Illness rider. It would only cost ₹320 extra per month.
            </p>
          </div>
          <button className="bg-white text-brand-orange-900 hover:bg-slate-100 px-6 py-3 rounded-xl font-semibold transition-colors shrink-0">
            View Recommendation
          </button>
        </div>
      </div>

    </div>
  );
}
