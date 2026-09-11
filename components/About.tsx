import { ClipboardCheck, Activity, Award } from "lucide-react";

export default function About() {
  const steps = [
    {
      icon: <ClipboardCheck className="w-6 h-6 text-teal-600" />,
      title: "Comprehensive Assessment",
      desc: "We analyze functional movement patterns, muscle imbalances, and joint ranges to locate the true origin of your pain.",
    },
    {
      icon: <Activity className="w-6 h-6 text-teal-600" />,
      title: "Hands-On Clinical Treatment",
      desc: "Targeted manual therapies, gentle spinal joint mobilizations, and soft tissue work to restore comfort.",
    },
    {
      icon: <Award className="w-6 h-6 text-teal-600" />,
      title: "Strength & Prevention Gym",
      desc: "Progressive functional exercise inside our fitness center ensures you never suffer the same injury twice.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-extrabold text-teal-600 tracking-widest uppercase">
              The OM Physio Approach
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 tracking-tight leading-tight">
              Bridging Clinical Medicine and Modern Fitness.
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Most physical therapy clinics stop once you no longer feel sharp pain. At <b>OM PHYSIO CARE & FITNESS CENTER</b>, recovery is only phase one. We build up your core strength, mobility, and stability to turn your body into a strong, resilient foundation.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200/80 p-6 rounded-2xl flex items-start gap-4 shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  {s.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{s.title}</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}