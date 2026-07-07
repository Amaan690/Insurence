"use client";

import { motion } from "framer-motion";
import { Users, FileCheck, Star, Building } from "lucide-react";

const stats = [
  { id: 1, value: "15M+", label: "Happy Customers", icon: Users },
  { id: 2, value: "99.9%", label: "Claim Success Rate", icon: FileCheck },
  { id: 3, value: "50+", label: "Insurance Partners", icon: Building },
  { id: 4, value: "4.9/5", label: "App Rating", icon: Star },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Trust is our biggest asset.<br/>Transparency is our promise.
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Unlike traditional platforms, we don't hide the fine print. We break down complex policies into simple, understandable terms so you know exactly what you're buying.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.id}>
                  <div className="w-12 h-12 rounded-full bg-brand-orange-50 flex items-center justify-center mb-4 text-brand-orange-600">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Mockup of a Trust/Review UI */}
            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
              
              <div className="flex items-center gap-2 mb-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium ml-2">Joined by 15M+ Indians</div>
              </div>
              
              <div className="space-y-4 relative z-10">
                <div className="bg-slate-800/50 border border-slate-700 p-5 rounded-2xl backdrop-blur-md">
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-brand-orange-500 fill-brand-orange-500" />)}
                  </div>
                  <p className="text-slate-300 text-sm italic">"The AI advisor found a gap in my previous corporate policy. Saved me from a ₹2 Lakh hospital bill during an emergency."</p>
                  <div className="mt-3 text-xs font-semibold text-slate-400">- Rahul S., Bangalore</div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 p-5 rounded-2xl backdrop-blur-md ml-8">
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-brand-orange-500 fill-brand-orange-500" />)}
                  </div>
                  <p className="text-slate-300 text-sm italic">"Claim settlement took exactly 2 hours. Didn't have to make a single phone call, the app handled everything."</p>
                  <div className="mt-3 text-xs font-semibold text-slate-400">- Priya M., Delhi</div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
