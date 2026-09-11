"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle2, Loader2, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send.");

      setSent(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Clinic Details */}
          <div>
            <span className="text-xs font-extrabold text-[#57b45a] tracking-widest uppercase">
              Direct Booking
            </span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">
              Begin Your Pain-Free Journey Today.
            </h2>
            <p className="mt-4 text-slate-400 text-base max-w-lg">
              Visit our clinic or submit an appointment request. Our team will follow up directly.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#57b45a] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Location</p>
                  <p className="text-slate-200 font-medium text-sm mt-0.5">
                    OM PHYSIO CARE & FITNESS CENTER, Main Road, Medical Plaza
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#57b45a] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Call / WhatsApp</p>
                  <p className="text-slate-200 font-medium text-sm mt-0.5">+91 88667 52493</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#57b45a] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Email</p>
                  <p className="text-slate-200 font-medium text-sm mt-0.5">omphysiocare@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#57b45a] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Hours</p>
                  <p className="text-slate-200 font-medium text-sm mt-0.5">
                    Monday – Saturday: 8:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-800/90 border border-slate-700/80 p-8 sm:p-10 rounded-3xl shadow-2xl">
            {sent ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-[#57b45a] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">Booking Requested!</h3>
                <p className="text-slate-300 mt-2 text-sm max-w-xs mx-auto">
                  Thank you! Your details were delivered to our inbox. We will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-2">Request an Appointment</h3>

                {errorMessage && (
                  <div className="p-3 bg-rose-500/20 border border-rose-500 text-rose-300 text-xs rounded-xl">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Harshad Patoliya"
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#267690]"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#267690]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 88667 52493"
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#267690]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                    Condition / Pain Area
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your symptoms (e.g. cervical discomfort, joint stiffness, knee rehab)..."
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#267690]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 bg-[#57b45a] hover:bg-[#449447] disabled:opacity-50 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#57b45a]/25 transition flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Confirm Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}