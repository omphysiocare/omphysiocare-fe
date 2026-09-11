"use client";

import Image from "next/image";
import { Phone, Calendar } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-[300px] rounded-2xl bg-gradient-to-tr from-teal-700 to-teal-500 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition">
            <Image
              src="/logo.png"
              alt="OM Physio Care Logo"
              width={48}
              height={48}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          {/* <div>
            <span className="font-extrabold text-base tracking-tight text-[#267690] block leading-tight">
              OM PHYSIO CARE
            </span>
            <span className="text-[11px] font-bold text-[#57b45a] tracking-wider uppercase">
              & Fitness Center
            </span>
          </div> */}
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#home" className="hover:text-[#267690] transition">Home</a>
          <a href="#services" className="hover:text-[#267690] transition">Services</a>
          <a href="#about" className="hover:text-[#267690] transition">Why Us</a>
          <a href="#contact" className="hover:text-[#267690] transition">Location</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+918866752493"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#267690] px-3 py-2 transition"
          >
            <Phone className="w-4 h-4 text-[#57b45a]" />
            <span>Call Us</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#267690] hover:bg-[#1c566a] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-[#267690]/20 transition-all hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-[#57b45a]" />
            Book Visit
          </a>
        </div>
      </div>
    </header>
  );
}