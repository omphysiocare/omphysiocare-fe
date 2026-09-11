"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      {/* Background Decorative Mesh Orbs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-teal-200/40 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-sky-200/30 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          Evidence-Based Pain Recovery & Rehab
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto"
        >
          Reclaim Your Movement. <br />
          <span className="gradient-title">Live Completely Pain-Free.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Personalized clinical physiotherapy, targeted spine/joint decompression, and active fitness retraining designed to fix the root cause of your discomfort.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-teal-600/25 transition-all hover:-translate-y-0.5 text-base"
          >
            <span>Book Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold px-8 py-4 rounded-xl shadow-xs transition text-base"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Feature Metric Counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-10 border-t border-slate-200/80"
        >
          <div className="p-4 rounded-2xl bg-white/70 border border-slate-100 shadow-xs">
            <span className="text-3xl font-extrabold text-teal-700">5k+</span>
            <p className="text-xs font-semibold text-slate-500 mt-1">Sessions Completed</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/70 border border-slate-100 shadow-xs">
            <span className="text-3xl font-extrabold text-teal-700">99%</span>
            <p className="text-xs font-semibold text-slate-500 mt-1">Recovery Rate</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/70 border border-slate-100 shadow-xs">
            <span className="text-3xl font-extrabold text-teal-700">1-on-1</span>
            <p className="text-xs font-semibold text-slate-500 mt-1">Dedicated Attention</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/70 border border-slate-100 shadow-xs">
            <span className="text-3xl font-extrabold text-teal-700">Cert.</span>
            <p className="text-xs font-semibold text-slate-500 mt-1">Senior Therapists</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}