"use client";

import { motion } from "framer-motion";
import { Check, Info, Zap } from "lucide-react";

const policies = [
  {
    id: 1,
    provider: "HDFC ERGO",
    logo: "H",
    name: "Optima Secure (Family Floater)",
    coverage: "₹10 Lakhs (Base) + ₹20L Bonus",
    premium: "₹1,245",
    csr: "99.2%",
    features: [
      "2X Coverage from Day 1 (Secure Benefit)",
      "Zero Copayment at network hospitals",
      "No Room Rent Capping (Any Room)",
      "60 Days Pre & 180 Days Post Hospitalization"
    ],
    recommended: true
  },
  {
    id: 2,
    provider: "Niva Bupa",
    logo: "N",
    name: "ReAssure 2.0",
    coverage: "₹10 Lakhs",
    premium: "₹1,050",
    csr: "99.9%",
    features: [
      "Lock the Clock (Age doesn't increase premium)",
      "Unlimited ReAssure (Forever restoration)",
      "Booster+ (Unused base sum insured carries over)",
      "No Room Rent Limit"
    ],
    recommended: false
  },
  {
    id: 3,
    provider: "Care Health",
    logo: "C",
    name: "Care Supreme",
    coverage: "₹15 Lakhs",
    premium: "₹920",
    csr: "95.2%",
    features: [
      "Cumulative Bonus Super (Up to 500%)",
      "Unlimited Automatic Recharge",
      "AYUSH Treatment covered up to Sum Insured",
      "Advance Technology Methods Covered"
    ],
    recommended: false
  }
];

export default function PolicyComparison() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Compare Top Health Plans</h2>
          <p className="text-lg text-slate-600">
            Real prices. Real features. We compare the market's leading policies so you can make an informed decision without the sales pitch.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <motion.div
              key={policy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-3xl p-6 md:p-8 relative border flex flex-col h-full ${policy.recommended ? 'border-brand-orange-500 shadow-2xl shadow-brand-orange-500/10' : 'border-slate-200 shadow-sm'} transition-all`}
            >
              {policy.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-blue-600 to-brand-orange-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full flex items-center gap-1 shadow-lg z-10">
                  <Zap className="w-3 h-3" /> Best Value for Family
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6 pt-2">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center font-extrabold text-slate-800 text-2xl border border-slate-200 shrink-0">
                  {policy.logo}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{policy.provider}</h3>
                  <p className="text-sm font-medium text-slate-500">{policy.name}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="text-xs font-medium text-slate-500 mb-1">Effective Cover</div>
                  <div className="font-bold text-slate-900 text-[15px]">{policy.coverage}</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="text-xs font-medium text-slate-500 mb-1 flex items-center gap-1">CSR (2023-24) <Info className="w-3 h-3" /></div>
                  <div className="font-bold text-slate-900 text-[15px]">{policy.csr}</div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-extrabold text-slate-900 leading-none">{policy.premium}</span>
                  <span className="text-sm font-medium text-slate-500 pb-1">/mo</span>
                </div>
                <div className="text-sm text-brand-orange-600 font-semibold bg-brand-orange-50 inline-block px-2.5 py-1 rounded-md mt-2">Save up to 15% with 2-yr plan</div>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {policy.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="w-5 h-5 text-brand-orange-500 shrink-0" />
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mt-auto pt-6 border-t border-slate-100">
                <button className="py-3.5 px-4 rounded-xl font-semibold border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">
                  View Brochure
                </button>
                <button className={`py-3.5 px-4 rounded-xl font-semibold transition-colors shadow-lg ${policy.recommended ? 'bg-brand-orange-500 hover:bg-brand-orange-600 text-white shadow-brand-orange-500/30' : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20'}`}>
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
