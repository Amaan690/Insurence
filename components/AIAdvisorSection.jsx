"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, ChevronRight, CheckCircle2 } from "lucide-react";

export default function AIAdvisorSection() {
  const [step, setStep] = useState(1);
  const [analyzing, setAnalyzing] = useState(false);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else {
      setAnalyzing(true);
      setTimeout(() => setAnalyzing(false), 2000); // Simulate API call
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-brand-orange-50/50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange-50 text-brand-orange-600 text-sm font-semibold mb-6 border border-brand-orange-100">
              <Bot className="w-4 h-4" />
              <span>Meet OnSureKaro AI</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Not sure which policy to buy? Let AI decide.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Answer 3 simple questions. Our proprietary AI engine will scan 500+ policies across 50 insurers to find the exact coverage you need, without any hidden clauses.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Personalized risk assessment",
                "Coverage gap analysis",
                "Unbiased recommendations",
                "Zero spam calls guaranteed"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* AI Form Widget */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-brand-orange-400 to-brand-blue-400 rounded-2xl rotate-12 blur-2xl opacity-30"></div>
            
            <div className="relative">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-slate-900">Free Health Assessment</h3>
                <span className="text-sm font-semibold text-brand-orange-600 bg-brand-orange-50 px-3 py-1 rounded-full border border-brand-orange-100">Step {step} of 3</span>
              </div>

              <AnimatePresence mode="wait">
                {!analyzing ? (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="min-h-[200px]"
                  >
                    {step === 1 && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Who are you buying insurance for?</label>
                          <div className="grid grid-cols-2 gap-3">
                            <button className="py-3 border-2 border-brand-orange-500 bg-brand-orange-50 text-brand-orange-700 font-semibold rounded-xl">Self</button>
                            <button className="py-3 border-2 border-slate-200 hover:border-slate-300 text-slate-600 font-medium rounded-xl transition-colors">Family</button>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">How old are you?</label>
                          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange-500/50 transition-all">
                            <option>18-25 Years</option>
                            <option>26-35 Years</option>
                            <option>36-45 Years</option>
                            <option>46+ Years</option>
                          </select>
                        </div>
                      </div>
                    )}
                    {step === 2 && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Where do you live?</label>
                          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange-500/50 transition-all">
                            <option>Tier 1 City (e.g., Mumbai, Delhi)</option>
                            <option>Tier 2 City</option>
                            <option>Tier 3 City</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Do you have any existing illnesses?</label>
                          <div className="grid grid-cols-2 gap-3">
                            <button className="py-3 border-2 border-slate-200 hover:border-slate-300 text-slate-600 font-medium rounded-xl transition-colors">Yes</button>
                            <button className="py-3 border-2 border-brand-orange-500 bg-brand-orange-50 text-brand-orange-700 font-semibold rounded-xl">No</button>
                          </div>
                        </div>
                      </div>
                    )}
                    {step === 3 && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">What's your annual income range?</label>
                          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange-500/50 transition-all">
                            <option>Below 5 Lakhs</option>
                            <option>5-10 Lakhs</option>
                            <option>10-20 Lakhs</option>
                            <option>Above 20 Lakhs</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="analyzing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="min-h-[200px] flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-orange-50 flex items-center justify-center mb-2">
                      <Sparkles className="w-8 h-8 text-brand-orange-500 animate-pulse" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">AI is analyzing...</h4>
                    <p className="text-slate-500 text-sm max-w-xs">Scanning 500+ plans to find the best match for your profile.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {!analyzing && (
                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                  <button 
                    onClick={() => setStep(step > 1 ? step - 1 : 1)}
                    className={`text-slate-500 font-medium hover:text-slate-700 transition-colors ${step === 1 ? 'invisible' : ''}`}
                  >
                    Back
                  </button>
                  <button 
                    onClick={handleNext}
                    className="bg-slate-900 hover:bg-brand-orange-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors"
                  >
                    {step === 3 ? 'Generate Match' : 'Continue'} <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
