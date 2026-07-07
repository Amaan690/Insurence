"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, ChevronDown, User, Menu, X, HeartPulse, HeartHandshake, 
  Car, Plane, Home, Briefcase, ArrowRight 
} from "lucide-react";

const megaMenuData = [
  {
    title: "Health Insurance",
    icon: HeartPulse,
    color: "text-rose-500",
    bg: "bg-rose-50",
    items: [
      { name: "Family Health Insurance", desc: "Covers spouse & children" },
      { name: "Senior Citizen Health", desc: "Specialized for ages 60+" },
      { name: "Critical Illness Cover", desc: "Lump sum on diagnosis" },
      { name: "Arogya Sanjeevani", desc: "Standard affordable plan" },
      { name: "1 Cr Super Top-up", desc: "Expand existing coverage" }
    ]
  },
  {
    title: "Life Insurance",
    icon: HeartHandshake,
    color: "text-brand-blue-500",
    bg: "bg-brand-blue-50",
    items: [
      { name: "Term Life Insurance", desc: "High cover, low premium" },
      { name: "Return of Premium Term", desc: "Get premiums back if you survive" },
      { name: "ULIP Plans", desc: "Investment + Insurance" },
      { name: "Retirement & Pension", desc: "Secure your golden years" },
      { name: "Child Education Plans", desc: "Fund future milestones" }
    ]
  },
  {
    title: "Motor & Travel",
    icon: Car,
    color: "text-brand-orange-500",
    bg: "bg-brand-orange-50",
    items: [
      { name: "Comprehensive Car", desc: "Full damage protection" },
      { name: "Pay As You Drive", desc: "Premium based on usage" },
      { name: "Two Wheeler Cover", desc: "Starting at ₹499/year" },
      { name: "Commercial Vehicle", desc: "For trucks & cabs" },
      { name: "Travel Insurance", desc: "Schengen & USA/Canada specific" }
    ]
  },
  {
    title: "Business & Other",
    icon: Briefcase,
    color: "text-purple-500",
    bg: "bg-purple-50",
    items: [
      { name: "Group Health (SME)", desc: "Cover your employees" },
      { name: "Home Insurance", desc: "Protect against fire & theft" },
      { name: "Cyber Insurance", desc: "Protection against fraud" },
      { name: "Doctor's Indemnity", desc: "Professional liability" },
      { name: "Marine & Transit", desc: "Cargo protection" }
    ]
  }
];

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass  border-b border-slate-200/50">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between relative">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue-600 to-brand-orange-500 flex items-center justify-center text-white shadow-lg group-hover:shadow-brand-orange-500/25 transition-all">
            <Shield className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">OnSure<span className="text-brand-orange-500">Karo</span></span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-slate-600 h-full">
          <div 
            className="h-full flex items-center group cursor-pointer"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <div className={`flex items-center gap-1 transition-colors ${isMegaMenuOpen ? 'text-brand-orange-500' : 'hover:text-brand-orange-500'}`}>
              Insurance Products 
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            </div>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {isMegaMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="fixed top-[80px] left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-b border-slate-200 overflow-hidden z-40"
                >
                  <div className="container mx-auto px-4 md:px-6 py-10 relative">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-orange-100/40 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                    
                    <div className="flex gap-12 relative z-10">
                      {/* 4 Column Category Grid */}
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {megaMenuData.map((category, idx) => (
                          <div key={idx} className="group/cat">
                            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-3">
                              <div className={`w-10 h-10 rounded-xl ${category.bg} ${category.color} flex items-center justify-center group-hover/cat:scale-110 transition-transform shadow-sm`}>
                                <category.icon className="w-5 h-5" />
                              </div>
                              <h4 className="font-bold text-slate-900 text-lg">{category.title}</h4>
                            </div>
                            <ul className="space-y-4">
                              {category.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link href="#" className="group/item block hover:bg-slate-50 p-2 -mx-2 rounded-lg transition-colors">
                                    <div className="flex items-center justify-between">
                                      <div className="font-semibold text-sm text-slate-700 group-hover/item:text-brand-orange-500 transition-colors">
                                        {item.name}
                                      </div>
                                      <ArrowRight className="w-3.5 h-3.5 text-brand-orange-500 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                    </div>
                                    <div className="text-xs text-slate-500 mt-1">
                                      {item.desc}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* Highlight/Offer Card in Mega Menu - On the Right */}
                      <div className="w-[320px] shrink-0 border-l border-slate-200/50 pl-12 hidden xl:flex flex-col">
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-xl text-white relative overflow-hidden flex-1 flex flex-col justify-between group">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange-500/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
                          
                          <div className="relative z-10">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md text-brand-orange-400 text-[10px] font-extrabold uppercase tracking-widest mb-6 border border-white/10">
                              Limited Time Offer
                            </div>
                            <h4 className="font-bold text-2xl leading-tight mb-3">Save up to 25% on Health Plans</h4>
                            <p className="text-sm text-slate-300 mb-8 leading-relaxed">
                              Lock in your premiums before the upcoming price hike on all multi-year policies.
                            </p>
                          </div>
                          <Link href="#" className="relative z-10 flex items-center justify-between bg-white text-slate-900 px-5 py-3.5 rounded-xl font-bold group-hover:bg-brand-orange-50 transition-colors">
                            <span>Check Savings</span>
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 transition-colors">
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="#renew" className="hover:text-brand-orange-500 transition-colors">Renewals</Link>
          <Link href="#claims" className="hover:text-brand-orange-500 transition-colors">Claims</Link>
          <Link href="/support" className="hover:text-brand-orange-500 transition-colors">Support</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/dashboard" className="flex items-center gap-2 text-brand-orange-500 font-semibold hover:text-brand-orange-600 transition-colors bg-brand-orange-50 hover:bg-brand-orange-100 px-4 py-2 rounded-xl">
            <User className="w-5 h-5" />
            Sign In
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="lg:hidden p-2 text-slate-600 hover:text-brand-orange-500 transition-colors cursor-pointer"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden w-full bg-white border-t border-slate-200 overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Products Section */}
              <div>
                <h4 className="font-extrabold text-slate-400 text-xs uppercase tracking-wider mb-4">Insurance Products</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {megaMenuData.map((category, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h5 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-lg ${category.bg} ${category.color} flex items-center justify-center`}>
                          <category.icon className="w-4 h-4" />
                        </div>
                        {category.title}
                      </h5>
                      <ul className="space-y-2 pl-9">
                        {category.items.slice(0, 3).map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link 
                              href="#" 
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-xs text-slate-500 hover:text-brand-orange-500 transition-colors block py-0.5"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Utility Links */}
              <div className="border-t border-slate-100 pt-6 space-y-4 font-semibold text-slate-700">
                <Link href="#renew" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-brand-orange-500 transition-colors">Renewals</Link>
                <Link href="#claims" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-brand-orange-500 transition-colors">Claims</Link>
                <Link href="/support" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-brand-orange-500 transition-colors">Support</Link>
              </div>
              
              {/* Sign In CTA */}
              <div className="border-t border-slate-100 pt-6">
                <Link 
                  href="/dashboard" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 text-white bg-brand-orange-500 hover:bg-brand-orange-600 font-bold py-3.5 rounded-xl transition-colors"
                >
                  <User className="w-5 h-5" />
                  Sign In
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
