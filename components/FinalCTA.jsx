"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/10">
              <Bot className="w-8 h-8 text-brand-orange-400" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Still Confused About Which Policy to Buy?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Let our AI Insurance Advisor help you choose the perfect coverage. No spam, no hidden fees, just honest advice.
            </p>
            
            <Link href="/support" className="inline-flex bg-gradient-to-r from-brand-blue-500 to-brand-orange-500 hover:from-brand-blue-400 hover:to-brand-orange-400 text-white font-bold text-lg px-8 py-4 rounded-xl items-center gap-2 mx-auto transition-all shadow-lg shadow-brand-blue-500/25">
              Start Free Assessment <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
