"use client";

import { Activity, Phone, Calendar } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-700 to-teal-500 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <span className="font-extrabold text-base tracking-tight text-slate-900 block leading-tight">
              OM PHYSIO CARE
            </span>
            <span className="text-[11px] font-semibold text-teal-600 tracking-wider uppercase">
              & Fitness Center
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#home" className="hover:text-teal-600 transition">Home</a>
          <a href="#services" className="hover:text-teal-600 transition">Services</a>
          <a href="#about" className="hover:text-teal-600 transition">Why Us</a>
          <a href="#contact" className="hover:text-teal-600 transition">Location</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-teal-700 px-3 py-2 transition"
          >
            <Phone className="w-4 h-4 text-teal-600" />
            <span>Call Us</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-teal-600/20 transition-all hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            Book Visit
          </a>
        </div>
      </div>
    </header>
  );
}