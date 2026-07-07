"use client";

import { motion } from "framer-motion";
import { ShoppingCart, FilePlus2, UploadCloud, Search, CheckCircle } from "lucide-react";

const steps = [
  { id: 1, title: "Buy Policy", desc: "Instant issuance on the app.", icon: ShoppingCart },
  { id: 2, title: "Raise Claim", desc: "1-click intimation via AI bot.", icon: FilePlus2 },
  { id: 3, title: "Upload Docs", desc: "Scan and upload via phone.", icon: UploadCloud },
  { id: 4, title: "Quick Review", desc: "AI verifies docs in minutes.", icon: Search },
  { id: 5, title: "Settlement", desc: "Money directly in bank.", icon: CheckCircle },
];

export default function ClaimJourney() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Zero-Hassle Claims Process</h2>
          <p className="text-lg text-slate-600">
            We don't just sell policies. We stand by you when you need us the most.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${index === steps.length - 1 ? 'bg-brand-orange-500 text-white shadow-brand-orange-500/30' : 'bg-white text-brand-orange-500 border border-slate-100'}`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500 max-w-[150px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
