"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Dumbbell, Check, ArrowRight } from "lucide-react";

export default function Services() {
  const cards = [
    {
      title: "Orthopedic & Spine Rehab",
      desc: "Tailored treatments for disc bulges, chronic cervical/lumbar pain, sciatica, frozen shoulder, and joint stiffness.",
      icon: <Activity className="w-6 h-6 text-teal-600" />,
      features: ["Joint Mobilization Therapy", "Spinal Decompression", "Post-Surgical Protocols"],
    },
    {
      title: "Sports Injury & Conditioning",
      desc: "Rapid return-to-sport protocols for ACL/ligament tears, tendonitis, muscular strains, and functional stability.",
      icon: <ShieldCheck className="w-6 h-6 text-sky-600" />,
      features: ["Kinetic Motion Screening", "Dry Needling & Kinesiology", "Agility Retraining"],
    },
    {
      title: "Fitness & Posture Correction",
      desc: "Correct work-from-home posture imbalances, tech-neck syndromes, and rebuild full-body muscular endurance.",
      icon: <Dumbbell className="w-6 h-6 text-emerald-600" />,
      features: ["Core & Pelvic Restoration", "Ergonomic Assessment", "Active Functional Training"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-teal-600 tracking-widest uppercase">
            Clinical Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">
            Targeted Care Designed Around Your Body
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
            We reject quick-fix band-aids. Every treatment plan is systematically tested against your biomechanical baseline.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:bg-white hover:border-teal-500/40 transition-all"
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
                      <div className="w-4 h-4 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-teal-700" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="mt-8 pt-4 inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800"
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