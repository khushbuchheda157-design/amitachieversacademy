import {
  Users,
  Lightbulb,
  ClipboardList,
  HelpCircle,
  TrendingUp,
  Trophy,
  CheckCircle,
} from "lucide-react";
import { AmbientSectionGlow } from "./ProfessionalBackground";

export default function WhyChooseUsSection() {
  const benefits = [
    {
      title: "Personalized Attention",
      desc: "Private 1-on-1 home visits in Bhandup & Mulund or micro-batches of max 6 students for individual focus.",
      icon: Users,
    },
    {
      title: "Concept Clarity",
      desc: "Deep focus on foundational concepts instead of rote memorization, helping students solve tricky questions easily.",
      icon: Lightbulb,
    },
    {
      title: "Regular Practice",
      desc: "Daily assignments, chapter-wise worksheets, and revision drills aligned with latest 2025-26 board patterns.",
      icon: ClipboardList,
    },
    {
      title: "Doubt Solving",
      desc: "Friendly, non-intimidating learning environment where students feel encouraged to ask doubts freely.",
      icon: HelpCircle,
    },
    {
      title: "Progress Tracking",
      desc: "Bi-weekly assessments, test performance scorecards, and continuous feedback shared directly with parents.",
      icon: TrendingUp,
    },
    {
      title: "Better Results",
      desc: "Proven track record of turning average scores into distinctions with tailored exam-writing strategies.",
      icon: Trophy,
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative py-16 lg:py-24 bg-gradient-to-b from-[#fbf8f2] via-white to-[#faf8f4] overflow-hidden border-b border-slate-200/80"
    >
      <AmbientSectionGlow goldRight={false} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
              Why Choose Us
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1e38] tracking-tight leading-tight">
              More Than Just <br />
              <span className="text-amber-500">Tuitions</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A focused, supportive, and result-driven learning experience for every student.
              We build academic confidence through systematic preparation and personal mentorship.
            </p>

            <div className="mt-5">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#0a1e38] text-white text-xs sm:text-sm font-bold shadow-xs">
                Key Benefits for Parents & Students
              </span>
            </div>

            {/* Real photo of studying student with natural portrait framing */}
            <div className="mt-8 relative w-full max-w-sm rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&crop=faces,top&w=800&h=700&q=80"
                alt="Student studying with notebook"
                className="w-full h-72 sm:h-80 object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0a1e38]/85 via-[#0a1e38]/40 to-transparent p-4">
                <div className="flex items-center gap-2 text-white text-xs font-semibold">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>100% committed to every child's academic growth</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2x3 Grid of 6 Clean Cards matching the design */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col items-center text-center group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0a1e38] leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
