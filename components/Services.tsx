"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Dumbbell, Check, ArrowRight } from "lucide-react";

export default function Services() {
  const cards = [
    {
      title: "Orthopedic & Spine Rehab",
      desc: "Targeted recovery for disc herniations, sciatica, frozen shoulder, chronic neck stiffness, and post-surgery care.",
      icon: <Activity className="w-6 h-6 text-[#267690]" />,
      features: ["Joint Mobilization Therapy", "Spinal Decompression", "Post-Surgical Protocols"],
    },
    {
      title: "Sports Injury & Conditioning",
      desc: "Accelerate recovery from ACL tears, tendonitis, muscle tears, and build athletic kinetic performance safely.",
      icon: <ShieldCheck className="w-6 h-6 text-[#57b45a]" />,
      features: ["Kinetic Motion Screening", "Dry Needling & Taping", "Agility Retraining"],
    },
    {
      title: "Fitness & Posture Correction",
      desc: "Combat sedentary desk posture, alleviate tech-neck, and rebuild progressive core muscular balance.",
      icon: <Dumbbell className="w-6 h-6 text-[#267690]" />,
      features: ["Core & Pelvic Stability", "Ergonomic Assessment", "Active Functional Training"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-[#57b45a] tracking-widest uppercase">
            Clinical Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">
            Targeted Care Designed Around Your Body
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
            Systematic rehabilitation testing combined with active conditioning for durable healing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:bg-white hover:border-[#267690]/40 transition-all"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">{item.title}</h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-6 pt-6 border-t border-slate-200 space-y-2.5">
                  {item.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-[#f0fbf1] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#57b45a]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="mt-8 pt-4 inline-flex items-center gap-2 text-sm font-bold text-[#267690] hover:text-[#57b45a] transition-colors"
              >
                <span>Book This Treatment</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}