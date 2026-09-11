"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Calendar, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Responsive Logo Container */}
        <a href="#home" onClick={closeMenu} className="flex items-center group">
          <div className="relative sm:w-64 md:w-72 h-14 flex items-center justify-start">
            <Image
              src="/logo.png"
              alt="OM Physio Care Logo"
              width={480}
              height={120}
              className="object-contain w-full h-full object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#home" className="hover:text-[#267690] transition">Home</a>
          <a href="#services" className="hover:text-[#267690] transition">Services</a>
          <a href="#about" className="hover:text-[#267690] transition">Why Us</a>
          <a href="#contact" className="hover:text-[#267690] transition">Location</a>
        </nav>

        {/* Desktop & Tablet Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+918866752493"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#267690] px-3 py-2 transition"
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

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          {/* <a
            href="#contact"
            className="sm:hidden inline-flex items-center gap-1.5 bg-[#267690] text-white text-xs font-bold px-3 py-2 rounded-lg"
          >
            <Calendar className="w-3.5 h-3.5 text-[#57b45a]" />
            Book
          </a> */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-700 hover:text-[#267690] focus:outline-none transition rounded-lg hover:bg-slate-100"
          >
            {isOpen ? <X className="w-6 h-6 text-[#267690]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200/80 px-6 py-6 shadow-xl transition-all">
          <nav className="flex flex-col space-y-4 text-base font-semibold text-slate-700">
            <a
              href="#home"
              onClick={closeMenu}
              className="py-2 border-b border-slate-100 hover:text-[#267690] transition"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={closeMenu}
              className="py-2 border-b border-slate-100 hover:text-[#267690] transition"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="py-2 border-b border-slate-100 hover:text-[#267690] transition"
            >
              Why Us
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="py-2 border-b border-slate-100 hover:text-[#267690] transition"
            >
              Location
            </a>

            {/* Mobile Contact CTAs */}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+918866752493"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-slate-800 font-bold hover:bg-slate-50 transition text-sm"
              >
                <Phone className="w-4 h-4 text-[#57b45a]" />
                Call +91 88667 52493
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#267690] text-white font-bold shadow-md hover:bg-[#1c566a] transition text-sm"
              >
                <Calendar className="w-4 h-4 text-[#57b45a]" />
                Book Consultation
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}