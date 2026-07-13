"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, Zap, HeartPulse, HeartHandshake, 
  Car, Bike, Plane, Home, Building2, ShieldAlert 
} from "lucide-react";

const heroCategories = [
  { name: "Health Insurance", icon: HeartPulse, color: "text-rose-500", bg: "bg-rose-50", label: "Cashless Cover" },
  { name: "Term Life Insurance", icon: HeartHandshake, color: "text-brand-blue-500", bg: "bg-brand-blue-50", label: "₹1 Cr Cover" },
  { name: "Car Insurance", icon: Car, color: "text-brand-orange-500", bg: "bg-brand-orange-50", label: "Instant Policy" },
  { name: "Bike Insurance", icon: Bike, color: "text-emerald-500", bg: "bg-emerald-50", label: "From ₹499" },
  { name: "Travel Insurance", icon: Plane, color: "text-cyan-500", bg: "bg-cyan-50", label: "Schengen Approved" },
  { name: "Home Insurance", icon: Home, color: "text-indigo-500", bg: "bg-indigo-50", label: "Full Protection" },
  { name: "Group Health", icon: Building2, color: "text-purple-500", bg: "bg-purple-50", label: "For SMEs" },
  { name: "Cyber Insurance", icon: ShieldAlert, color: "text-amber-500", bg: "bg-amber-50", label: "Fraud Cover" },
  // { name: "Cyber Insurance", icon: ShieldAlert, color: "text-amber-500", bg: "bg-amber-50", label: "Fraud Cover" },
  // { name: "Cyber Insurance", icon: ShieldAlert, color: "text-amber-500", bg: "bg-amber-50", label: "Fraud Cover" }
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 lg:pt-20 lg:pb-28">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-brand-orange-100/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] rounded-full bg-brand-blue-100/30 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange-50 text-brand-orange-600 text-sm font-semibold border border-brand-orange-100">
              <span>IRDAI Approved Broker • Lic No. 987</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Compare & Buy Insurance <span className="text-brand-orange-500">OnSureKaro</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Find the absolute lowest premiums for Health, Term Life, and Motor Insurance. Trusted by over 15 Million Indians. 100% unbiased AI suggestions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href="/support" className="px-8 py-4 w-full sm:w-auto rounded-xl bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-orange-500/30">
                Talk to an Advisor <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-xs text-slate-600 font-semibold pt-4">
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-5 h-5 text-brand-orange-500" /> Cashless Claim Support</div>
              <div className="flex items-center gap-1.5"><Zap className="w-5 h-5 text-amber-500" /> 2-Min Policy Issuance</div>
            </div>
          </div>

          {/* Right Column - Product Category Grid Dashboard (PolicyBazaar Style) */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-200/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange-50 rounded-full blur-3xl pointer-events-none" />
              
              <div className="mb-6">
                <h3 className="font-bold text-slate-900 text-xl mb-1">Select Category</h3>
                <p className="text-sm text-slate-500">Choose a product to find best-matched plans</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {heroCategories.map((category, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group bg-slate-50 hover:bg-white rounded-2xl p-4 border border-slate-100 hover:border-brand-orange-200 hover:shadow-lg hover:shadow-brand-orange-500/5 transition-all duration-300 cursor-pointer flex flex-col justify-between items-center text-center min-h-[130px]"
                  >
                    <div className={`w-12 h-12 rounded-xl ${category.bg} flex items-center justify-center mb-3 group-hover:scale-115 transition-transform`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm leading-tight mb-1 group-hover:text-brand-orange-500 transition-colors">
                        {category.name}
                      </h4>
                      <span className="text-[10px] font-semibold text-slate-400">
                        {category.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
