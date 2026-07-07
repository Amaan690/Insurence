"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "HDFC ERGO", logo: "H" },
  { name: "Niva Bupa", logo: "N" },
  { name: "Max Life", logo: "M" },
  { name: "ICICI Lombard", logo: "I" },
  { name: "Star Health", logo: "S" },
  { name: "Care Health", logo: "C" },
  { name: "Tata AIG", logo: "T" },
  { name: "Bajaj Allianz", logo: "B" }
];

export default function InsuranceCategories() {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Compare plans from 50+ IRDAI approved insurance partners
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-100 font-extrabold flex items-center justify-center text-slate-800 text-lg border border-slate-200 shadow-sm">
                {partner.logo}
              </div>
              <span className="font-bold text-slate-600 text-sm">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
