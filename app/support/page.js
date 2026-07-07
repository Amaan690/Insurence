"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone, Mail, FileText, ChevronDown, CheckCircle2, Bot } from "lucide-react";

const faqs = [
  {
    q: "Is the AI insurance assessment really free?",
    a: "Yes! Our AI-powered assessment is completely free and transparent. We only earn a standard commission from the insurer if you decide to buy a policy through us."
  },
  {
    q: "How fast are claims processed?",
    a: "We have a dedicated claims team that intimates claims within 30 minutes of you reporting them on the app. Cashless claims at network hospitals are typically approved within 2-4 hours."
  },
  {
    q: "Can I port my existing health policy to OnSureKaro?",
    a: "Absolutely. We make the portability process seamless. You won't lose any of your accumulated benefits like waiting period waivers or cumulative bonuses."
  }
];

export default function SupportPage() {
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-orange-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How can we help you today?</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Whether you need a free assessment, claim assistance, or have a general query, our expert team and AI are here 24/7.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 -mt-12">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Left Column: Quick Contact Cards */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-brand-orange-50 text-brand-orange-600 flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">WhatsApp AI Support</h3>
                <p className="text-sm text-slate-500 mb-4">Instant answers and policy downloads.</p>
                <div className="font-semibold text-brand-orange-600">+91 98765 43210</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Phone Support</h3>
                <p className="text-sm text-slate-500 mb-4">Talk to our IRDAI certified advisors.</p>
                <div className="font-semibold text-brand-blue-600">1800-123-4567</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Email Us</h3>
                <p className="text-sm text-slate-500 mb-4">For escalations and document submission.</p>
                <div className="font-semibold text-purple-600">support@onsurekaro.com</div>
              </div>
            </div>

            {/* Right Column: Support Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200/60 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange-50 rounded-full blur-3xl" />
                
                <h2 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">Send us a request</h2>
                
                {formStatus === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-brand-orange-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-brand-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                    <p className="text-slate-600 max-w-md">
                      Thank you for reaching out. One of our senior advisors will get back to you within 2 hours.
                    </p>
                    <button 
                      onClick={() => setFormStatus("idle")}
                      className="mt-8 px-6 py-2 border border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                        <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange-500/50 transition-all" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Mobile Number</label>
                        <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange-500/50 transition-all" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">How can we help you?</label>
                      <div className="relative">
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange-500/50 transition-all appearance-none cursor-pointer font-medium text-slate-700">
                          <option>Request a Free AI Assessment</option>
                          <option>Urgent Claim Assistance</option>
                          <option>Policy Renewal Help</option>
                          <option>General Query</option>
                        </select>
                        <ChevronDown className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Additional Details</label>
                      <textarea required rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange-500/50 transition-all resize-none" placeholder="Tell us more about your requirement..."></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === "submitting"}
                      className="w-full bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-orange-500/25 flex justify-center items-center gap-2"
                    >
                      {formStatus === "submitting" ? (
                        <span className="flex items-center gap-2">
                          <Bot className="w-5 h-5 animate-pulse" /> Processing...
                        </span>
                      ) : (
                        "Submit Request"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* FAQs Section */}
          <div className="max-w-3xl mx-auto mt-24 pb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'bg-white shadow-md' : 'bg-transparent'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-slate-900"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
