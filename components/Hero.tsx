"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      {/* Brand Radial Lighting */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-[#267690]/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-44 right-10 w-[350px] h-[350px] bg-[#57b45a]/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eef7fa] border border-[#267690]/20 text-[#267690] text-xs font-bold uppercase tracking-wider mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#57b45a]" />
          Evidence-Based Pain Recovery & Rehab
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto"
        >
          Reclaim Your Movement. <br />
          <span className="gradient-brand">Live Completely Pain-Free.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Specialized physical therapy, joint realignment, and progressive fitness conditioning designed around long-term biomechanical health.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#267690] hover:bg-[#1c566a] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#267690]/25 transition-all hover:-translate-y-0.5 text-base"
          >
            <span>Book Assessment</span>
            <ArrowRight className="w-4 h-4 text-[#57b45a]" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white border border-slate-200 hover:border-[#57b45a] hover:bg-slate-50 text-slate-700 font-bold px-8 py-4 rounded-xl shadow-xs transition text-base"
          >
            Explore Treatments
          </a>
        </motion.div>

        {/* Highlight Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-10 border-t border-slate-200/80"
        >
          <div className="p-4 rounded-2xl bg-white/80 border border-slate-100 shadow-xs">
            <span className="text-3xl font-extrabold text-[#267690]">10k+</span>
            <p className="text-xs font-semibold text-slate-500 mt-1">Sessions Completed</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 border border-slate-100 shadow-xs">
            <span className="text-3xl font-extrabold text-[#57b45a]">98%</span>
            <p className="text-xs font-semibold text-slate-500 mt-1">Recovery Rate</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 border border-slate-100 shadow-xs">
            <span className="text-3xl font-extrabold text-[#267690]">1-on-1</span>
            <p className="text-xs font-semibold text-slate-500 mt-1">Dedicated Plans</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 border border-slate-100 shadow-xs">
            <span className="text-3xl font-extrabold text-[#57b45a]">Certified</span>
            <p className="text-xs font-semibold text-slate-500 mt-1">Clinical Specialists</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}