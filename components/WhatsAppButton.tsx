"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918866752493?text=Hello%20OM%20Physio%20Care%20And%20Fitness%20Center,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-transform duration-200 flex items-center justify-center"
      aria-label="Chat with our therapist on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
    </a>
  );
}